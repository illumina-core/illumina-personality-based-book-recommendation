# -*- coding: utf-8 -*-
import json
import copy
import os
from ppredict import Predictor
from pmodel import PModel

P = Predictor()

def predict_review(bookshelf_data):
    for bookshelf_key, value in bookshelf_data.items():
        parts = len(os.listdir('data/cleansed_books/' + bookshelf_key))

        cwd = os.getcwd()
        if not os.path.exists(cwd + "/data/results/" + bookshelf_key):
            os.mkdir(cwd + "/data/results/" + bookshelf_key)

        for x in range(parts-1):
            part = str(x+1)
            with open("data/cleansed_books/" + bookshelf_key + "/part_" + part + ".json", encoding="utf8") as read_file:
                book_data = json.load(read_file)
                personality = {}
                for book_key, value in book_data.items():
                    sample = {}
                    sample['rating'] = book_data[book_key]['avg_ratings']
                    reviews = book_data[book_key]['reviews']

                    x = 0
                    for review in reviews:
                        prediction =  P.review_predict([review])
                        sample[str(x)] = prediction
                        x = x + 1

                    personality[book_key] = sample
                    
                    with open("data/results/" + bookshelf_key + "/part_" + part + ".json", "w" , encoding="utf8") as fp:
                        json.dump(personality, fp, indent=1, ensure_ascii=False)

with open("data/book_list.json", encoding="utf8") as read_file:
    bookshelf_data = json.load(read_file)

predict_review(bookshelf_data)