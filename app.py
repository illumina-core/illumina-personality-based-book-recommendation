from flask import Flask, jsonify, request, jsonify
from flask_bcrypt import Bcrypt 
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token

from mongoengine import connect
from mongoengine.queryset.visitor import Q
from mongoengine import DoesNotExist

from bson.objectid import ObjectId
from datetime import datetime

from models import Shelf_Schema as Shelf
from models import Book_Schema as Book
from models import User_Schema as User
from models import Review_Schema as Review

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'secret'

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)
connect('react-test-1')

@app.route('/register', methods=["POST"])
def register():
    username = request.get_json()['username']
    full_name = request.get_json()['full_name']
    email = request.get_json()['email']
    gender = request.get_json()['gender']
    date_of_birth = request.get_json()['date_of_birth']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    User(
        username=username,
        full_name=full_name,
        email=email,
        gender=gender,
        date_of_birth=date_of_birth,
        password=password,
        created=created
    ).save()

    new_user = User.find_one({'_id': User._id})

    result = {'email': new_user['email'] + ' registered'}

    return jsonify({'result' : result})

@app.route('/login', methods=['POST'])
def login():
    email = request.get_json()['email']
    password = request.get_json()['password']

    try:
        response = User.objects(Q(username=email) or Q(email=email)).get()
    except DoesNotExist as err:
        return jsonify({"error": "Invalid Username/Email"})

    if bcrypt.check_password_hash(response['password'], password):
        access_token = create_access_token(identity = {
            'username': response['username'],
            'full_name': response['full_name']
        })
        return jsonify({'token':access_token})
    else:
        return jsonify({"error":"Invalid Password"})


if __name__ == '__main__':
    app.run(debug=True)