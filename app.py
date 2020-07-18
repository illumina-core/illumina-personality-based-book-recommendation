from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt 
from flask_cors import CORS
import json
from datetime import datetime
import random
from collections import Counter

from personality_analysis.ppredict import PPredictor
from personality_analysis.cpredict import CPredictor
from personality_analysis.clusters import Clusters
from personality_analysis.pmodel import PModel

from mongoengine import connect
from mongoengine.queryset.visitor import Q
from mongoengine import DoesNotExist, NotUniqueError

from scipy.spatial import distance

from data_preprocessing.models import Shelves, Books, Users, Reviews


app = Flask(__name__)

bcrypt = Bcrypt(app)
app.secret_key = 'secret'

CORS(app)

username = 'admin'
password = 'admin'
db = 'illumina'
host = f'mongodb+srv://{username}:{password}@illumina-lmf8b.gcp.mongodb.net/{db}?retryWrites=true&w=majority'

connect(host=host)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/register', methods=["POST"])
@app.route('/book/register', methods=["POST"])
@app.route('/book-shelves/register', methods=['POST'])
def register():
    username = request.get_json()['username']
    email = request.get_json()['email']
    password = request.get_json()['password']
    date_of_birth = request.get_json()['dob']
    per_desc = request.get_json()['per_desc']

    P = PPredictor()
    C = CPredictor()

    keys = ['OPN', 'CON', 'EXT', 'AGR', 'NEU']
    prediction =  P.user_predict([per_desc])
    personlaity = {keys[x]: prediction[x] for x in range(0,5)}

    cluster = C.user_cluster_predict([prediction])[0]

    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')

    try:
        Users(
            username=username,
            email=email,
            date_of_birth=date_of_birth,
            password=password,
            personality_index = personlaity,
            cluster = cluster,
            description = per_desc
        ).save()
    except NotUniqueError:
        return jsonify({"error":"Username or Email is not unique"})
    except:
        return jsonify({"error":"Registration Error, please try again"})

    return jsonify({'result' : email + ' registered'})

@app.route('/login', methods=['POST'])
@app.route('/book/login', methods=['POST'])
@app.route('/book-shelves/login', methods=['POSt'])
def login():
    login_id = request.get_json()['login_id']
    password = request.get_json()['password']

    try:
        response = Users.objects(Q(username=login_id) or Q(email=login_id)).get()
    except DoesNotExist as err:
        return jsonify({"err": True})

    if bcrypt.check_password_hash(response['password'], password):
        session['user'] = response['username']

        return jsonify({'username': response['username'] , 'profile_pic': response['profile_pic']})
    else:
        return jsonify({"err":True})

@app.route('/logout', methods=['POST'])
@app.route('/book/logout', methods=['POST'])
@app.route('/book-shelves/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({"logout": True})

@app.route('/search', methods=['GET'])
def search_book():  
    title = request.args.get('title', default = None, type = str)
    genre = request.args.get('genre', default = None, type = str)
    author = request.args.get('author', default = None, type = str)
    
    books = None
    if title != None:
        books = Books.objects(book_title__icontains=title).only(
            'book_title',
            'id',
            'cover_image',
            'avg_rating',
            'genres',
            'authors'
        ).order_by('-avg_rating')

    elif genre != None:
        books = Books.objects(genres__icontains=genre).only(
            'book_title',
            'id',
            'cover_image',
            'avg_rating',
            'genres',
            'authors'
        ).order_by('-avg_rating')

    elif author != None:
        books = Books.objects(authors__icontains=author).only(
            'book_title',
            'id',
            'cover_image',
            'avg_rating',
            'genres',
            'authors'
        ).order_by('-avg_rating')

    lim = 10
    total = books.count()
    if total%lim != 0:
        total = int(total/lim) + 1
    else:
        total = int(total/lim)

    if 'user' in session:
        user = Users.objects(username=session['user']).get()
        shelves = []
        for shelf in user['shelves']:
            shelves.append(shelf['shelf_title'])

        return  jsonify({"books":books.to_json(), "total": total, "shelves": shelves})

    return  jsonify({"books":books.to_json(), "total": total})

@app.route('/book/<id>', methods=['GET'])
def get_book(id):
    try:
        book = Books.objects(id=id).get()
    except:
        return jsonify({"err": "Book not found"})
        
    if 'user' in session:
        user = Users.objects(username=session['user']).get()
        shelves = []
        for shelf in user['shelves']:
            shelves.append(shelf['shelf_title'])

        return  jsonify({"book":book.to_json(), "shelves": shelves})

    return  jsonify({"book":book.to_json()})
 
@app.route('/get-user', methods=['GET'])
@app.route('/book/get-user', methods=['GET'])
@app.route('/book-shelves/get-user', methods=['GET'])
def get_user():
    user = Users.objects(username=session['user']).get()
    return jsonify({"user":user.to_json()})

@app.route('/book/add-review', methods=['POST'])
def add_review():
    review = request.get_json()['review']
    book = request.get_json()['book']

    user = Users.objects(username=session['user']).only('username', 'profile_pic').get()
    book = Books.objects(id=book).get()

    try:
        book.reviews.get(username=session['user'])['review_text'] = review
    except DoesNotExist:
        book.reviews.append(Reviews(
            username=user['username'],
            profile_pic=user['profile_pic'],
            review_text=review
            ))

    book.save()
    
    return jsonify({"result": True})

@app.route('/book/rate-book', methods=['POST'])
def rate_book():
    book_id = request.get_json()['book']
    rating = request.get_json()['rating']
 
    book = Books.objects(id=book_id).get()

    try:
        book.reviews.get(username=session['user'])['rating'] = rating
        book.reviews.get(username=session['user'])['created'] = datetime.utcnow()
    except DoesNotExist:
        user = Users.objects(username=session['user']).only('username', 'profile_pic').get()
        book.reviews.append(Reviews(
            username=user['username'],
            profile_pic=user['profile_pic'],
            rating = rating
        ))

    book.save()

    return jsonify({"result": True})

@app.route('/book-shelves/add-shelf', methods=['POST'])
@app.route('/add-shelf', methods=['POST'])
def add_shelf():
    data = request.get_json()['data']
    
    user = Users.objects(username=session['user']).get()
    for s in user.shelves:
        if s.shelf_title == data['shelf']:
            return jsonify({"result": 'shelf already present'})

    if len(data['pic']) > 0:
        user.shelves.append(Shelves(
            shelf_title=data['shelf'],
            shelf_pic=data['pic']
        ))
    else:
        user.shelves.append(Shelves(
            shelf_title=data['shelf']
        ))

    user.save()
    return jsonify({"result": "Shelf created"})

@app.route('/add-book-to-shelf', methods=['POST'])
@app.route('/book/add-book-to-shelf', methods=['POST'])
def add_book_to_shelf():
    shelf = request.get_json()['shelf']
    book = request.get_json()['book']

    user = Users.objects(username=session['user']).get()
    book = Books.objects(id=book).get()

    if book not in user.shelves.get(shelf_title=shelf).shelved_books:
        user.shelves.get(shelf_title=shelf).shelved_books.append(book)
        user.save()
        return jsonify({"result": 'Book Added'})
    return jsonify({"result": 'Book already present inside shelf'})

@app.route('/get-user-shelf', methods=['GET'])
@app.route('/book-shelves/get-user-shelf', methods=['GET'])
def get_user_shelf():
    user = Users.objects(username=session['user']).get()

    shelves = []
    for shelf in user.shelves:
        books = []
        for book in shelf.shelved_books:
            books.append(
                {
                'id': str(book.id),
                'title': book.book_title,
                'cover_image': book.cover_image,
                'authors': book.authors
                }
            )
        shelves.append(
            {
            "shelf_title": shelf.shelf_title,
            "shelf_pic": shelf.shelf_pic,
            "books": books
            }
        )

    return jsonify({"shelves": json.dumps(shelves)})

@app.route('/get-book-recommendation', methods=['GET'])
def get_book_recommendation():
    user = Users.objects(username=session['user']).get()

    genres = []
    ignore_books = []
    for shelf in user.shelves:
        for book in shelf.shelved_books:
            ignore_books.append(book['id'])
            for genre in book.genres:
                genres.append(genre)

    genres = list(dict(Counter(genres).most_common()).keys())

    books = None
    if len(ignore_books) > 0:
        if len(genres) > 5:
            genres = genres[:5]
    
        books = Books.objects(
            Q(avg_rating__gte=4.5) & Q(genres__in=list(genres)) & Q(id__nin=list(set(ignore_books)))
            ).only(
            'book_title',
            'id',
            'cover_image',
            'authors',
            'genres',
            'avg_rating'
        ).to_json()
    
    else:
        books = Books.objects(avg_rating__gte=4.5).only(
            'book_title',
            'id',
            'cover_image',
            'authors',
            'genres',
            'avg_rating'
        ).to_json()

    books = json.loads(books)
    books = random.sample(books,8)

    return jsonify({"rec": json.dumps(books)})

@app.route('/book/remove-review', methods=['POST'])
def remove_review():
    book = request.get_json()['book']

    book = Books.objects(id=book).get()
    book.reviews.remove(book.reviews.get(username=session['user']))
    book.save()

    return jsonify({'result': True})

@app.route('/remove-shelf-book', methods=['POST'])
def remove_shelf_book():
    book = request.get_json()['book']
    shelf = request.get_json()['shelf']

    user = Users.objects(username=session['user']).get()
    user.shelves.get(shelf_title=shelf).shelved_books.remove(Books.objects(id=book).get())
    
    user.save()

    return jsonify({'result': True})

@app.route('/book-shelves/remove-shelf', methods=['POST'])
@app.route('/remove-shelf', methods=['POST'])
def remove_shelf():
    shelf = request.get_json()['shelf']
    user = Users.objects(username=session['user']).get()
    user.shelves.remove(user.shelves.get(shelf_title=shelf))
    
    user.save()

    return jsonify({'result': True})

@app.route('/recommend-books-by-personality', methods=['GET'])
def recommend_books_by_personality():
    data = Users.objects(username=session['user']).only(
        'personality_index',
        'cluster',
        'shelves'
    ).get()

    if data['cluster'] == -1:
        return  jsonify({'nope': 'You have not gotten your personality yet'})

    per = data['personality_index']
    books = Books.objects(cluster = data['cluster']
                ).aggregate(*[
            # {
            #     '$project': {
            #         'id': 1,
            #         'book_title': 1,
            #         'cover_image': 1,
            #         'avg_rating': 1,
            #         'genres': 1,
            #         'authors': 1,
            #         'personality_index': 1
            #     }
            # },
            { '$sample': { 'size': 5 } }
        ])

    books = list(books)

    dis = {}
    up = tuple(per.values())
    for x in range(len(books)):
        bp = tuple(books[x]['personality_index'].values())
        dis[x] = distance.euclidean(up, bp)

    dis = sorted(dis.items(), key=lambda x: x[1])
    sorted_books = []
    for x in dis:
        oid = str(books[x[0]]['_id'])
        del books[x[0]]['_id']
        books[x[0]]['_id'] = {'$oid': oid}
        
        sorted_books.append(books[x[0]])

    shelves = []
    for shelf in data['shelves']:
        shelves.append(shelf['shelf_title'])

    return  jsonify({"books":sorted_books, "total": 1, "shelves": shelves})

@app.route('/get-genres', methods=['GET'])
def get_genres():
    genres = Books.objects().distinct('genres')
    dic = {}
    for alp in 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split():
        dic[alp.upper()] = []
        gen = []
        for genre in genres:
            if genre.lower()[0] == alp:
                if len(gen) < 14:
                    gen.append(genre)
                else:
                    dic[alp.upper()].append(gen)
                    gen = []
        if len(gen) > 0:
            dic[alp.upper()].append(gen)
    
    return jsonify({'genreResults': dic})

@app.route('/update-profile-data', methods=['POST'])
def update_proflie_data():
    data = request.get_json()['data']

    user = Users.objects(username=session['user']).get()

    session['user'] = data['username']

    user.profile_pic = data['profile_pic']
    user.username = data['username']
    user.email = data['email']
    user.save()

    return  jsonify({"updated": True})

@app.route('/book-shelves/update-shelf', methods=['POST'])
@app.route('/update-shelf', methods=['POST'])
def update_shelf():
    data = request.get_json()['data']

    user = Users.objects(username=session['user']).get()
    shelf = user.shelves.get(shelf_title=data['old_title'])
    shelf.shelf_title = data['new_title']
    shelf.shelf_pic = data['pic']

    user.save()

    return jsonify({'result': 'Shelf has been updated'})

@app.route('/get-genre-recommendation', methods=['GET'])
def get_genre_recommendation():

    cluster = Users.objects(username=session['user']).get().cluster
    genres = []
    for gens in Books.objects(cluster=cluster).only('genres'):
        genres += gens.genres

    genres = list(dict(Counter(genres).most_common()).keys())
    
    return jsonify({'result': genres[:6]})

if __name__ == '__main__':
    app.run(debug=True)