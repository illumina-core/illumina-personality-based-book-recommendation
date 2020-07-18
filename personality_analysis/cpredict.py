import pymongo
import pickle
import numpy as np
from personality_analysis.clusters import Clusters
from sklearn.preprocessing import MinMaxScaler

class CPredictor():
    def __init__(self):
        with open('data/static/cluster_model.pkl', 'rb') as f:
            self.model = pickle.load(f)

    def user_cluster_predict(self, X):
        test = np.array(X) 
        prediction = self.model.predict(test)
        return prediction

if __name__ == '__main__':
    C = CPredictor()
    test1 = [[3.036546454473845, 1.5057632104238742, 2.430427889119491, 3.7470608387187776, 4.37602776052686]]
    prediction =  C.user_cluster_predict(test1)
    print(prediction)
