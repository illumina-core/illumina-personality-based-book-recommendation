from mongoengine import Document
from mongoengine.fields import *
from mongoengine import Document, EmbeddedDocument
from datetime import datetime

# review document schema
class Reviews(EmbeddedDocument):
    user = ReferenceField('Users', dbref=True, default=None)
    review_text = StringField()
    rating = FloatField(default=3.5)
    created = DateTimeField(default=datetime.utcnow())

# book document schema
class Books(Document):
    book_title = StringField(required=True)
    author = ListField(StringField())
    description = StringField(default='')
    genres = ListField(StringField())
    cover_image = StringField()
    avg_rating = FloatField() 
    user_rating = DictField() # {'username': ['rating', 'date']}
    links = DictField()       # {'link name': url}
    personality_index = ListField(FloatField(required=True), default=[0.0,0.0,0.0,0.0,0.0])
    reviews = ListField(EmbeddedDocumentField(Reviews))
    extra_details = DictField()

# Shelf Schema
class Shelves(EmbeddedDocument):
    shelf_title = StringField(required=True)
    shelved_books = ListField(ReferenceField('Books', dbref=True), default=[])
    shelf_pic = StringField(default="../images/favourite.png")

# user document schema
class Users(Document):
    username = StringField(unque=True)
    password = StringField()
    email = EmailField(unique=True)
    profile_pic = StringField(default="../images/default_user.png")
    date_of_birth = DateTimeField()
    description = StringField(default="i am a default user")
    personality_index = ListField(FloatField(required=True), default=[0.0,0.0,0.0,0.0,0.0])
    friends_list = ListField(ReferenceField('self',  dbref=True))
    shelves = ListField(EmbeddedDocumentField(Shelves), default=[
        Shelves(
            shelf_title="Favourite"
        )
    ])
    created = DateTimeField(default=datetime.utcnow())