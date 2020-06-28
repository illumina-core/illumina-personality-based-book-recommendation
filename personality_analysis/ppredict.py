import pymongo
import pickle
from preprocess import Preprocess
from pmodel import PModel
from sklearn.preprocessing import MinMaxScaler

class PPredictor():
    def __init__(self):
        self.traits = ['OPN', 'CON', 'EXT', 'AGR', 'NEU']
        self.models = {}
        self.load_models()

    def load_models(self):
        for trait in self.traits:
            with open('data/static/' + trait + '_model.pkl', 'rb') as f:
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

# if __name__ == '__main__':
#     P = PPredictor()
#     text = """"
#       you know what was the best part of these books? and i say books as in plural because there were so fucking many of them i can't sit still long enough to check them all off. and i DID read every single one. what else was there to do in middle school?
#       anyway, the best part of these books was brian's description of food. it was magnificent. it didn't just make you hungry, it made you crave weird ass things that nobody would ever dream about eating in middle school. nutted cheeses and flan bread and berry cakes and what-not; almost makes you want to be a sword weilding ferret yourself.
#       which was good because by the tenth book you started to realize there was a trend to the plotlines. something bad happens, small furry animals go on a quest. they fight a lot of little battles until one major battle which the good guys almost lose until, when all hope is lost, a giant contingent of allies created on the preceding journey show up to conquer evil: together.
#       still, i always finished satisfied. and a little hungry."""
#     prediction =  P.review_predict([text])
#     print(prediction)
