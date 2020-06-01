from mongoengine import Document
from mongoengine.fields import *
from mongoengine import Document, EmbeddedDocument

# review document schema
class Review_Schema(EmbeddedDocument):
    user = ReferenceField('User_Schema', dbref=True, required=True)
    review_text = StringField()
    rating = IntField()

# book document schema
class Book_Schema(Document):
    book_title = StringField(required=True)
    author = StringField(required=True)
    description = StringField(default='')
    genres = ListField(StringField())
    cover_image = StringField()
    avg_rating = FloatField() 
    links = ListField(StringField())
    reviews = ListField(EmbeddedDocumentField(Review_Schema))
    extra_details = DictField()

# Shelf Schema
class Shelf_Schema(EmbeddedDocument):
    shelf_title = StringField(required=True)
    shelved_books = ListField(ReferenceField('Book_Schema', dbref=True))

# user document schema
class User_Schema(Document):
    username = StringField(unque=True)
    password = StringField()
    email = EmailField(unique=True)
    full_name = StringField()
    profile_pic = StringField()
    gender = StringField(choices=('male', 'female', 'other'))
    date_of_birth = DateTimeField()
    description = StringField()
    personality_index = ListField(FloatField(required=True, default=0.0))
    friends_list = ListField(ReferenceField('self',  dbref=True))
    shelves = ListField(EmbeddedDocumentField(Shelf_Schema))