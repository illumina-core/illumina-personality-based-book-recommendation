import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import time
import json
import copy
import os
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import normalize
from sklearn.cluster import AgglomerativeClustering
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import GridSearchCV

class Clusters():
    def __init__(self):
        self.knn = KNeighborsClassifier(n_neighbors = 1)
      
    def fit(self, X_train,y_train):

        #used to determine optimum no of neighbours, result was 1
        # knn2 = KNeighborsClassifier()
        # param_grid = {'n_neighbors': np.arange(1, 25)}
        # knn_gscv = GridSearchCV(knn2, param_grid, cv=5)
        # knn_gscv.fit(X, y)
        # print(knn_gscv.best_params_)

        self.knn = self.knn.fit(X_train,y_train)
        # print(knn.score(X_test, y_test))

    def predict(self, X):
        return self.knn.predict(X)

if __name__ == '__main__':

    # extract id and personality values, not required to run
    def extract_cluster_data(genres):   
        data = {}
        for genre in genres:
            with open("data/analyzed_books/" + genre + ".json", encoding="utf8") as read_file:
                books_data = json.load(read_file)
                
            for book_key, value in books_data.items():
                data[book_key] = books_data[book_key]['average']
                        
        with open("data/cdata.json", "w", encoding="utf8") as write_file:
            json.dump(data, write_file, indent=4, ensure_ascii=False)
                        
    # create clusters
    # Books per Cluster:
    # [793, 1336, 785, 1051, 889, 2014, 768, 881, 1004, 1260, 836, 1149, 733, 460, 679, 52, 972, 981, 331, 829, 293, 624, 521, 195, 41, 676, 262, 514, 611, 361]
    def generate_clusters(pers_data):   
        cdata = pd.DataFrame.from_dict(pers_data)
        cdata = pd.DataFrame.transpose(cdata)
        # print(cdata.head())

        data_scaled = normalize(cdata)
        data_scaled = pd.DataFrame(data_scaled, columns=cdata.columns)
        # print(data_scaled.head())

        X = cdata.values
        model = AgglomerativeClustering(n_clusters=30, affinity='euclidean', linkage='ward')
        model.fit(X)

        labels = model.labels_

        # used to save cluster labels, not required to run 
        # l1 = pd.Series(labels).to_json(orient='values')
        # with open("data/cluster_labels1.json", "w", encoding="utf8") as write_file:
        #     json.dump(l1, write_file, indent=4, ensure_ascii=False)

        plt.scatter(X[labels==0, 0], X[labels==0, 1], s=50, marker='o', color='red')
        plt.scatter(X[labels==1, 0], X[labels==1, 1], s=50, marker='o', color='blue')
        plt.scatter(X[labels==2, 0], X[labels==2, 1], s=50, marker='o', color='green')
        plt.scatter(X[labels==3, 0], X[labels==3, 1], s=50, marker='o', color='purple')
        plt.scatter(X[labels==4, 0], X[labels==4, 1], s=50, marker='o', color='orange')
        plt.scatter(X[labels==5, 0], X[labels==5, 1], s=50, marker='o', color='linen')
        plt.scatter(X[labels==6, 0], X[labels==6, 1], s=50, marker='o', color='turquoise')
        plt.scatter(X[labels==7, 0], X[labels==7, 1], s=50, marker='o', color='slateblue')
        plt.scatter(X[labels==8, 0], X[labels==8, 1], s=50, marker='o', color='ghostwhite')
        plt.scatter(X[labels==9, 0], X[labels==9, 1], s=50, marker='o', color='salmon')
        plt.scatter(X[labels==10, 0], X[labels==10, 1], s=50, marker='o', color='black')
        plt.scatter(X[labels==11, 0], X[labels==11, 1], s=50, marker='o', color='lemonchiffon')
        plt.scatter(X[labels==12, 0], X[labels==12, 1], s=50, marker='o', color='rosybrown')
        plt.scatter(X[labels==13, 0], X[labels==13, 1], s=50, marker='o', color='palegreen')
        plt.scatter(X[labels==14, 0], X[labels==14, 1], s=50, marker='o', color='orchid')
        plt.scatter(X[labels==15, 0], X[labels==15, 1], s=50, marker='o', color='lightcoral')
        plt.scatter(X[labels==16, 0], X[labels==16, 1], s=50, marker='o', color='olive')
        plt.scatter(X[labels==17, 0], X[labels==17, 1], s=50, marker='o', color='ivory')
        plt.scatter(X[labels==18, 0], X[labels==18, 1], s=50, marker='o', color='olivedrab')
        plt.scatter(X[labels==19, 0], X[labels==19, 1], s=50, marker='o', color='dodgerblue')
        plt.scatter(X[labels==20, 0], X[labels==20, 1], s=50, marker='o', color='darkgrey')
        plt.scatter(X[labels==21, 0], X[labels==21, 1], s=50, marker='o', color='lavenderblush')
        plt.scatter(X[labels==22, 0], X[labels==22, 1], s=50, marker='o', color='midnightblue')
        plt.scatter(X[labels==23, 0], X[labels==23, 1], s=50, marker='o', color='teal')
        plt.scatter(X[labels==24, 0], X[labels==24, 1], s=50, marker='o', color='purple')
        plt.scatter(X[labels==25, 0], X[labels==25, 1], s=50, marker='o', color='khaki')
        plt.scatter(X[labels==26, 0], X[labels==26, 1], s=50, marker='o', color='deepskyblue')
        plt.scatter(X[labels==27, 0], X[labels==27, 1], s=50, marker='o', color='gold')
        plt.scatter(X[labels==28, 0], X[labels==28, 1], s=50, marker='o', color='mistyrose')
        plt.scatter(X[labels==29, 0], X[labels==29, 1], s=50, marker='o', color='peachpuff')
        plt.scatter(X[labels==30, 0], X[labels==30, 1], s=50, marker='o', color='antiquewhite')
        plt.show()
        return labels

    #insert cluster values in dataset
    def insert_cluster_data(labels, genres):   
        x = 0
        print('start')
        for genre in genres:
            with open(f"data/analyzed_books/{genre}.json", encoding="utf8") as read_file:
                books_data = json.load(read_file)
                
            for book_key, value in books_data.items():
                books_data[book_key]['cluster'] = str(labels[x])
                x = x + 1
                with open(f"data/final/{genre}.json", "w", encoding="utf8") as write_file:
                    json.dump(books_data, write_file, indent=4, ensure_ascii=False)

            with open(f"data/final/{genre}.json", "w", encoding="utf8") as write_file:
                json.dump(books_data, write_file, indent=4, ensure_ascii=False)

    cluster = Clusters()

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

    pers_data = pd.read_json (r'data\cdata.json')
    labels = generate_clusters(pers_data)

    cdata = pd.DataFrame.from_dict(pers_data)
    cdata = pd.DataFrame.transpose(cdata)
    cdata['Clusters'] = labels 
    X = cdata.drop(columns=['Clusters']).values
    y = (cdata['Clusters']).values
    X_train, X_test, y_train, y_test= train_test_split(X, y, test_size=0.3, random_state=101)

    # cluster.fit(X_train, y_train)
    # cluster.predict(X_test)
    # print(cluster.knn.score(X_test, y_test))