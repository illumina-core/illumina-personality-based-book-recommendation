import json
import copy
import os
from ppredict import Predictor
from pmodel import PModel

P = Predictor()

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

def predict_review(genres):
    for genre in genres:

        print("Dir ==>", genre)
        parts = len(os.listdir(f'data/cleansed_books/{genre}'))
        print("parts", parts)

        cwd = os.getcwd()
        if not os.path.exists(f"{cwd}/data/analyzed_books/{genre}"):
            os.mkdir(f"{cwd}/data/analyzed_books/{genre}")

        personality = []
        for x in range(1, parts+1):
            part = str(x)
            with open(f"data/cleansed_books/{genre}/part_{part}.json", encoding="utf8") as read_file:
                book_data = json.load(read_file)

                for book_key, value in book_data.items():

                    OPN = []
                    CON = []
                    EXT = []
                    AGR = []
                    NEU = []

                    for review in value['reviews']:
                        pre =  P.review_predict([review])
                        OPN.append(pre['OPN'])
                        CON.append(pre['CON'])
                        EXT.append(pre['EXT'])
                        AGR.append(pre['AGR'])
                        NEU.append(pre['NEU'])

                    OPN_LEN = len(OPN)
                    CON_LEN = len(CON)
                    EXT_LEN = len(EXT)
                    AGR_LEN = len(AGR)
                    NEU_LEN = len(NEU)

                    OPN_SUM = sum(OPN)
                    CON_SUM = sum(CON)
                    EXT_SUM = sum(EXT)
                    AGR_SUM = sum(AGR)
                    NEU_SUM = sum(NEU)                        

                    if((OPN_LEN or CON_LEN or EXT_LEN or AGR_LEN or NEU_LEN) < 1):
                       continue

                    if((OPN_SUM or CON_SUM or EXT_SUM or AGR_SUM or NEU_SUM) < 1):
                       continue

                    personality.append({
                        book_key: {
                            'rating': float(value['avg_ratings'].strip()),
                            'OPN': OPN,
                            'CON': CON,
                            'EXT': EXT,
                            'AGR': AGR,
                            'NEU': NEU,
                            'average': {
                                'OPN': OPN_SUM/OPN_LEN,
                                'CON': CON_SUM/CON_LEN,
                                'EXT': EXT_SUM/EXT_LEN,
                                'AGR': AGR_SUM/AGR_LEN,
                                'NEU': NEU_SUM/NEU_LEN
                            }
                        }
                    })
                    
        with open(f"data/analyzed_books/{genre}.json", "w", encoding="utf8") as write_file:
            json.dump(personality, write_file, indent=4, ensure_ascii=False)

predict_review(genres)