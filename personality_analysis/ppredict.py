import pymongo
import pickle
from personality_analysis.preprocess import Preprocess
from personality_analysis.pmodel import PModel
from sklearn.preprocessing import MinMaxScaler

class PPredictor():
    def __init__(self):
        self.traits = ['OPN', 'CON', 'EXT', 'AGR', 'NEU']
        self.models = {}
        self.load_models()

    def load_models(self):
        for trait in self.traits:
            with open('personality_analysis/data/static/' + trait + '_model.pkl', 'rb') as f:
                self.models[trait] = pickle.load(f)

    def review_predict(self, X, traits='All', predictions='All'):
            predictions = {}
            if traits == 'All':
                for trait in self.traits:
                    pkl_model = self.models[trait]
                    trait_scores = pkl_model.predict(X, regression=True).reshape(1, -1)
                    predictions[trait] = trait_scores.flatten()[0]
            return predictions

    def user_predict(self, X, traits='All', predictions='All'):
        predictions = []
        if traits == 'All':
            for trait in self.traits:
                pkl_model = self.models[trait]
                trait_scores = pkl_model.predict(X, regression=True).reshape(1, -1)
                predictions.append(trait_scores.flatten()[0])
        return predictions

if __name__ == '__main__':
    P = PPredictor()
    text = """
 i hate sociery and life. i think that we have created a stupid system of rules that only exist to delete creativity, we live in a cycle of lsavery where the onyl people who gain powera re those at top. EVERYONE IS FOOLISH AND I DESPISE THE ALL"""
    prediction =  P.review_predict([text])
    print(prediction)
