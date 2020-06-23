# -*- coding: utf-8 -*-
import json
import copy
import os
from ppredict import Predictor
from pmodel import PModel

P = Predictor()

def predict_review(bookshelf_data):
    personality = {}

    for bookshelf_key, value in bookshelf_data.items():
        if bookshelf_key == 'applied-mathematics':
            with open("data/personality_book_reviews.json", "w" , encoding="utf8") as fp:
                json.dump(personality, fp, indent=1, ensure_ascii=False)
            break
        else:
            parts = len(os.listdir('data/cleansed_books/' + bookshelf_key))

            cwd = os.getcwd()
            if not os.path.exists(cwd + "/data/results/" + bookshelf_key):
                os.mkdir(cwd + "/data/results/" + bookshelf_key)

            for x in range(parts):
                part = str(x+1)
                with open("data/cleansed_books/" + bookshelf_key + "/part_" + part + ".json", encoding="utf8") as read_file:
                    book_data = json.load(read_file)

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

def average_review(bookshelf_data):
    personality = {}
    
    for bookshelf_key, value in bookshelf_data.items():
        if bookshelf_key == 'applied-mathematics':
            with open("data/FINAL.json", "w" , encoding="utf8") as fp:
                json.dump(personality, fp, indent=1, ensure_ascii=False)
        else:
            parts = len(os.listdir('data/results/' + bookshelf_key))

            cwd = os.getcwd()
            if not os.path.exists(cwd + "/data/average/" + bookshelf_key):
                os.mkdir(cwd + "/data/average/" + bookshelf_key)

            for x in range(parts):
                part = str(x+1)
                with open("data/results/" + bookshelf_key + "/part_" + part + ".json", encoding="utf8") as read_file:
                    book_data = json.load(read_file)

                    traits = ["OPN", "CON", "EXT", "AGR", "NEU"]
                    
                    for book_key, value in book_data.items():
                        range_x = len(book_data[book_key]) - 2
                        avg_traits = {"OPN": 0, "CON": 0, "EXT": 0, "AGR": 0, "NEU": 0}
                        for x in range(0, range_x):
                            x = str(x)
                            for y in range(0, 5):
                                avg_traits[traits[y]] = book_data[book_key][x][traits[y]] + avg_traits[traits[y]]

                        if range_x == 0:
                            avg_traits["OPN"] = avg_traits["OPN"] 
                            avg_traits["CON"] = avg_traits["CON"] 
                            avg_traits["EXT"] = avg_traits["EXT"] 
                            avg_traits["AGR"] = avg_traits["AGR"] 
                            avg_traits["NEU"] = avg_traits["NEU"]
                        elif range_x == 1:
                            avg_traits["OPN"] = avg_traits["OPN"] 
                            avg_traits["CON"] = avg_traits["CON"] 
                            avg_traits["EXT"] = avg_traits["EXT"] 
                            avg_traits["AGR"] = avg_traits["AGR"] 
                            avg_traits["NEU"] = avg_traits["NEU"]
                        else:
                            avg_traits["OPN"] = avg_traits["OPN"] / range_x
                            avg_traits["CON"] = avg_traits["CON"] / range_x
                            avg_traits["EXT"] = avg_traits["EXT"] / range_x
                            avg_traits["AGR"] = avg_traits["AGR"] / range_x
                            avg_traits["NEU"] = avg_traits["NEU"] / range_x   
                        
                        personality[book_key] = avg_traits

with open("data/book_list.json", encoding="utf8") as read_file:
    bookshelf_data = json.load(read_file)

predict_review(bookshelf_data)