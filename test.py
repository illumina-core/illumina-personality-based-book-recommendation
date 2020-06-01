from mongoengine import connect
from mongoengine.fields import *
from mongoengine import Document, EmbeddedDocument
import json

connect('test')

class R(Document):
    n = StringField(required=True)

# R(
#     n='moz'
# ).save()

print((str(R.objects().get()['id'])))
# print(R.n)