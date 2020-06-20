from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt 
from flask_cors import CORS
import json
from datetime import datetime

from mongoengine import connect
from mongoengine.queryset.visitor import Q
from mongoengine import DoesNotExist, NotUniqueError

from models import Shelves, Books, Users, Reviews

app = Flask(__name__)

bcrypt = Bcrypt(app)
app.secret_key = 'secret'

CORS(app)

username = 'admin'
password = 'admin'
db = 'illumina'
host = f'mongodb+srv://{username}:{password}@illumina-lmf8b.gcp.mongodb.net/{db}?retryWrites=true&w=majority'

connect(host=host)

@app.route('/register', methods=["POST"])
@app.route('/book/register', methods=["POST"])
@app.route('/book-shelves/register', methods=['POST'])
def register():
    username = request.get_json()['username']
    email = request.get_json()['email']
    password = request.get_json()['password']
    date_of_birth = request.get_json()['dob']

    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')

    try:
        Users(
            username=username,
            email=email,
            date_of_birth=date_of_birth,
            password=password
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
        return jsonify({"user": "Invalid login id"})

    if bcrypt.check_password_hash(response['password'], password):
        session['user'] = response.to_json()

        return jsonify({'username': response['username'] , 'profile_pic': response['profile_pic']})
    else:
        return jsonify({"user":"Invalid Password"})

@app.route('/logout', methods=['POST'])
@app.route('/book/logout', methods=['POST'])
@app.route('/book-shelves/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({"logout": True})

@app.route('/search', methods=['GET'])
def search_book():
    title = request.args.get('title', default = '', type = str)
    # page = request.args.get('page', default = 1, type = int)

    books = Books.objects(book_title__icontains=title)

    lim = 10
    total = len(books)
    if total%lim != 0:
        total = int(total/lim) + 1
    else:
        total = int(total/lim)

    # books = books[lim*(page-1):lim*page]
    return  jsonify({"books":books.to_json(), "total": total})

@app.route('/book/<id>', methods=['GET'])
def get_book(id):
    try:
        book = Books.objects(id=id).get()
    except:
        return jsonify({"err": "Book not found"})
        
    return  jsonify({"book":book.to_json()})
 
@app.route('/get-user', methods=['GET'])
@app.route('/book/get-user', methods=['GET'])
@app.route('/book-shelves/get-user', methods=['GET'])
def get_user():
    user = json.loads(session['user'])
    user = Users.objects(username=user['username']).get()
    return jsonify({"user":user.to_json()})

@app.route('/book/add-review', methods=['POST'])
def add_review():
    review = request.get_json()['review']
    book = request.get_json()['book']

    user = json.loads(session['user'])
    book = Books.objects(id=book).get()

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
    user = json.loads(session['user'])

    book.reviews.get(username=user['username'])['rating'] = rating
    book.reviews.get(username=user['username'])['created'] = datetime.utcnow()

    book.save()

    return jsonify({"result": True})

@app.route('/add-shelf', methods=['POST'])
def add_shelf():
    shelf = request.get_json()['shelf']
    user = json.loads(session['user'])
    user = Users.objects(username=user['username']).get()
    user.shelves.append(Shelves(
        shelf_title=shelf
    ))
    user.save()
    return jsonify({"result": True})

@app.route('/add-book-to-shelf', methods=['POST'])
@app.route('/book/add-book-to-shelf', methods=['POST'])
def add_book_to_shelf():
    shelf = request.get_json()['shelf']
    book = request.get_json()['book']

    user = json.loads(session['user'])
    user = Users.objects(username=user['username']).get()

    user.shelves.get(shelf_title=shelf).shelved_books.append(
        Books.objects(id=book).get()
    )
    user.save()
    return jsonify({"result": True})


@app.route('/get-user-shelf', methods=['GET'])
@app.route('/book-shelves/get-user-shelf', methods=['GET'])
def get_user_shelf():
    user = json.loads(session['user'])
    user = Users.objects(username=user['username']).get()

    shelves = []
    for shelf in user.shelves:
        books = []
        for book in shelf.shelved_books:
            books.append(
                {
                'id': str(book.id),
                'title': book.book_title,
                'cover_image': book.cover_image,
                'author': book.author
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


if __name__ == '__main__':
    app.run(debug=True)