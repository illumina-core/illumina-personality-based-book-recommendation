import json
import copy
import os
import os.path
from langdetect import detect
from langdetect.lang_detect_exception import LangDetectException

#extracting genres
def extract_genre(books_data):  
    genrelister = []  

    for genre in books_data:

        if genre == 'applied-mathematics':
            break
        else:
            parts = len(os.listdir('books/' + genre))
            
            for x in range(1, parts+1):
                part = str(x)

                with open("books/" + genre + "/part_" + part + ".json", encoding="utf8") as read_file:
                    books_data = json.load(read_file)
                    for key in books_data:
                        for y in books_data[key]['genres']:
                            if y in genrelister:
                                continue
                            else:
                                genrelister.append(y)
                    
        with open("genre.json", "w", encoding="utf8") as write_file:
            json.dump(genrelister, write_file, indent=4, ensure_ascii=False)

#creating a dictionary consisting of genres and specified books 
def extract_genre_book(books_data):  
    genrelister = {} 

    for genre in books_data:

        if genre == 'applied-mathematics':
            break
        else:
            parts = len(os.listdir('books/' + genre))
            
            for x in range(1, parts+1):
                part = str(x)

                with open("books/" + genre + "/part_" + part + ".json", encoding="utf8") as read_file:
                    books_data = json.load(read_file)
                    for key in books_data:
                        for y in books_data[key]['genres']:
                            if y in genrelister:
                                # print('Adding ' + key + ' to ' + y)
                                genrelister[y].append(key)               
                            else:
                                genrelister.update({y : [key]})
                                # print('New genre ' + y + " with " + key)
                    
        with open("genre_books.json", "w", encoding="utf8") as write_file:
            json.dump(genrelister, write_file, indent=4, ensure_ascii=False)


#reading bookshelf list
with open("book_list.json", encoding="utf8") as read_file:
    book_data = json.load(read_file)

print('extracting genre')
extract_genre_book(book_data)



