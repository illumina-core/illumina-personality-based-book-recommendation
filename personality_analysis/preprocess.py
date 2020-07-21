# import numpy as np
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.preprocessing import MinMaxScaler
import pandas as pd

class Preprocess():
    def __init__(self):
        self.trait_score_dict = {
            'O': 'sOPN',
            'C': 'sCON',
            'E': 'sEXT',
            'A': 'sAGR',
            'N': 'sNEU',
            'OPN': 'sOPN',
            'CON': 'sCON',
            'EXT': 'sEXT',
            'AGR': 'sAGR',
            'NEU': 'sNEU',
            'Openness': 'sOPN',
            'Conscientiousness': 'sCON',
            'Extraversion': 'sEXT',
            'Agreeableness': 'sAGR',
            'Neuroticism': 'sNEU'
            }

    def prep_data(self, type, trait, regression=False, model_comparison=False):
        df_status = self.prep_status_data()

        if type == 'status':
            # If need data to compare models
            X = df_status['STATUS']

            if regression:
                y_column = self.trait_score_dict[trait]
            y = df_status[y_column]
        return X, y

    def prep_status_data(self):
        df = pd.read_csv('data/mypersonality_final.csv', encoding="ISO-8859-1")
        df = self.convert_traits_to_boolean(df)
        return df

    def convert_traits_to_boolean(self, df):
        trait_columns = ['cOPN', 'cCON', 'cEXT', 'cAGR', 'cNEU']
        d = {'y': True, 'n': False}

        for trait in trait_columns:
            df[trait] = df[trait].map(d)

        return df

    def load_data(self, filepath):
        return pd.read_csv(filepath, encoding="ISO-8859-1")
