import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import time
import pickle
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVR
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_log_error
from sklearn.metrics import mean_squared_error
from personality_analysis.preprocess import Preprocess

class PModel():
    def __init__(self):
        self.regressor = SVR(kernel = 'rbf')
        self.tfidf = TfidfVectorizer(stop_words='english', strip_accents='ascii')

    def fit(self, X, y, regression=True):
        X = self.tfidf.fit_transform(X)
        if regression:
            self.regressor = self.regressor.fit(X, y)

    def predict(self, X, regression=True):
        X = self.tfidf.transform(X)
        if regression:
            return self.regressor.predict(X)

if __name__ == '__main__':
    traits = ['OPN', 'CON', 'EXT', 'AGR', 'NEU']
    pmodel = PModel()

    for trait in traits:
        preprocess = Preprocess()
        X_regression, y_regression = preprocess.prep_data('status', trait, regression=True, model_comparison=False)
        print('Fitting trait ' + trait + ' regression model...')
        pmodel.fit(X_regression, y_regression, regression=True)
        print('Done!')
        with open('data/static/' + trait + '_model.pkl', 'wb') as f:
            # Write the model to a file.
            pickle.dump(pmodel, f)
