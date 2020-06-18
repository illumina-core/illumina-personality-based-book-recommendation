import json
import copy
import os
import os.path
from langdetect import detect
from langdetect.lang_detect_exception import LangDetectException

genres = ['10th-century', '11th-century', '12th-century', '13th-century', '14th-century', 
'15th-century', '16th-century', '17th-century', '1864-shenandoah-campaign', '18th-century', 
'1917', '19th-century', '1st-grade', '20th-century', '21st-century', '2nd-grade', '40k', 
'ableism', 'abuse', 'academia', 'academic', 'academics', 'accounting', 'accra', 'action', 
'activism', 'adaptations', 'addis-ababa', 'addition', 'adolescence', 'adoption', 'adult', 
'adult-colouring-books', 'adult-fiction', 'adventure', 'adventurers', 'aeroplanes', 'africa', 
'african-american', 'african-american-literature', 'african-american-romance', 
'african-literature', 'agender', 'agriculture', 'ahistory', 'aircraft', 'airliners', 
'airships', 'albanian-literature', 'alchemy', 'alcohol', 'alexandria', 'algebra', 'algeria', 
'algiers', 'algorithms', 'aliens', 'alternate-history', 'alternate-universe', 
'alternative-medicine', 'amateur-sleuth', 'amazon', 'ambulance-service', 'ambulances', 
'american', 'american-civil-war', 'american-classics', 'american-fiction', 'american-history', 
'american-novels', 'american-revolution', 'american-revolutionary-war', 'americana', 'amish', 
'amish-fiction', 'amish-historical-romance-fiction', 'ancient', 'ancient-history', 'androgyne',
'angels', 'anglo-saxon', 'angola', 'animal-fiction', 'animals', 'anime', 'anthologies', 
'anthropology', 'anthropomorphic', 'anti-intellectualism', 'anti-racist', 'anti-science', 
'antietam-campaign', 'antiquities', 'antisemitism', 'apocalyptic', 'apple']

#removing reviews that are not english
def review_cleanse(reviews):
    cleaned_reviews = []
    for index in range(len(reviews)):
        try:
            if detect(reviews[index]) == 'en':
                cleaned_reviews.append(reviews[index])
        except LangDetectException:
                pass
    return cleaned_reviews
                     
#removing books containing no genres/reviews
def book_cleanse(books_data):
    cleansed = {}
    for book, attr in books_data.items():
        if 'reviews' not in attr:
            continue
        if len(attr['reviews']) < 1:
            continue

        if 'genres' not in attr:
            continue
        if len(attr['genres']) < 1:
            continue

        attr['reviews'] = review_cleanse(attr['reviews'])
        cleansed[book] = attr

    return cleansed

#reading book data for cleansing
def read_book_cleanse(genres):    
    for genre in genres:
        if genre in ['10th-century', '11th-century', '12th-century', '13th-century', '14th-century', 
'15th-century', '16th-century', '17th-century', '1864-shenandoah-campaign', '18th-century', 
'1917', '19th-century', '1st-grade', '20th-century', '21st-century', '2nd-grade', '40k', 
'ableism', 'abuse', 'academia', 'academic', 'academics', 'accounting', 'accra', 'action', 
'activism', 'adaptations', 'addis-ababa', 'addition', 'adolescence', 'adoption', 'adult', 
'adult-colouring-books', 'adult-fiction', 'adventure', 'adventurers', 'aeroplanes', 'africa', 
'african-american', 'african-american-literature', 'african-american-romance', 
'african-literature', 'agender', 'agriculture', 'ahistory', 'aircraft', 'airliners', 
'airships', 'albanian-literature', 'alchemy', 'alcohol', 'alexandria', 'algebra', 'algeria', 'algiers']:
            continue
        parts = len(os.listdir('books/' + genre))

        if not os.path.exists("cleansed_books/" + genre):
            os.mkdir("cleansed_books/" + genre)
            print("DIR =====> ", genre)

        for x in range(1, parts):
            part = str(x)
            print("part ", x)
            with open("books/" + genre + "/part_" + part + ".json", encoding="utf8") as read_file:
                books_data = json.load(read_file)
                cleansed_books = book_cleanse(books_data)
                
            with open("cleansed_books/" + genre + "/part_" + part + ".json", "w", encoding="utf8") as write_file:
                json.dump(cleansed_books, write_file, indent=4, ensure_ascii=False)


read_book_cleanse(genres)