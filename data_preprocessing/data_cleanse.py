import json
import copy
import os
import os.path
from langdetect import detect
from langdetect.lang_detect_exception import LangDetectException

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
def read_book_cleanse(books_data):    
    for genre in books_data:
        parts = len(os.listdir('books/' + genre))

        if not os.path.exists("cleansed_books/" + genre):
            os.mkdir("cleansed_books/" + genre)

        for x in range(1, parts+1):
            part = str(x)

            with open("books/" + genre + "/part_" + part + ".json", encoding="utf8") as read_file:
                books_data = json.load(read_file)
                cleansed_books = book_cleanse(books_data)
                
            with open("cleansed_books/" + genre + "/part_" + part + ".json", "w", encoding="utf8") as write_file:
                json.dump(cleansed_books, write_file, indent=4, ensure_ascii=False)

#reading bookshelf list
with open("book_list.json", encoding="utf8") as read_file:
    book_data = json.load(read_file)

print('cleansing book')
read_book_cleanse(book_data)






    
