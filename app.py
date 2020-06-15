from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt 
from flask_cors import CORS
import json

from mongoengine import connect
from mongoengine.queryset.visitor import Q
from mongoengine import DoesNotExist, NotUniqueError

from bson.objectid import ObjectId

from models import Shelves
from models import Books
from models import Users
from models import Reviews

app = Flask(__name__)

bcrypt = Bcrypt(app)
app.secret_key = 'secret'

CORS(app)

username = 'admin'
password = 'admin'
db = 'illumina'
host = f'mongodb+srv://{username}:{password}@illumina-lmf8b.gcp.mongodb.net/{db}?retryWrites=true&w=majority'

connect(host=host)

def is_logged_in(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return jsonify({"user":"Not logged in."})
    return wrap

@app.route('/register', methods=["POST"])
@app.route('/book/register', methods=["POST"])
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
def login():
    login_id = request.get_json()['login_id']
    password = request.get_json()['password']

    try:
        response = Users.objects(Q(username=login_id) or Q(email=login_id)).get()
    except DoesNotExist as err:
        return jsonify({"user": "Invalid login id"})

    if bcrypt.check_password_hash(response['password'], password):
        session['user'] = response.to_json()

        return jsonify({'user': response['username'] + ' logged in successfully!'})
    else:
        return jsonify({"user":"Invalid Password"})

@app.route('/search', methods=['GET'])
def search_book():
    title = request.args.get('title', default = '', type = str)
    page = request.args.get('page', default = 1, type = int)

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
def get_user():
    return jsonify({"user":session['user']})


@app.route('/book/add-review', methods=['POST'])
def add_review():
    review = request.get_json()['review']
    book = request.get_json()['book']

    user = json.loads(session['user'])
    user = Users.objects(id=user['_id']['$oid']).get()
    book = Books.objects(id=book).get()
    
    r = Reviews(user=user,review_text=review)

    book.reviews.append(r)
    book.save()
    
    return jsonify({"result": True})

@app.route('/logout', methods=['POST'])
def logout():
    session.clear()

    return jsonify({"logout": True})

if __name__ == '__main__':
    app.run(debug=True)