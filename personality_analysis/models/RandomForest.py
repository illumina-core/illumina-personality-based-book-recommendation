import pandas as pd
import numpy as np
import time
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_log_error
from sklearn.metrics import mean_squared_error
from sklearn.metrics import mean_absolute_error
from sklearn.metrics import r2_score

data = pd.read_csv('../data/mypersonality_final.csv',encoding='latin1')

# Rows are shuffled to decrease bias
data = data.reindex(np.random.permutation(data.index))

# EXT
print() 
print("EXTRAVERSION")
X = (data['STATUS']).values
y = np.log1p(data['sEXT'].values)
X_train, X_test, y_train, y_test= train_test_split(X, y, test_size=0.3, random_state=101)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

regressor = RandomForestRegressor(bootstrap=True, 
            max_features='sqrt',                           
            min_samples_leaf=1,                          
            min_samples_split=2,                            
            n_estimators= 200)                              

regressor.fit(X_train_vect, y_train)

start = time.time()
y_pred = regressor.predict(X_test_vect)
end = time.time()
print('Time to generate predictions on test set: %0.2fs' % (end - start))

err = mean_squared_error(y_test, y_pred)
print("mean squared error based on testing data: ", err)

err_abs = mean_absolute_error(y_test, y_pred)
print("mean absolute error based on testing data: ", err_abs)

err_r2 = r2_score(y_test, y_pred)
print("r2 score based on testing data: ", err_r2)

# OPN
print() 
print("OPENNESS")
X = (data['STATUS']).values
y = np.log1p(data['sOPN'].values)
X_train, X_test, y_train, y_test= train_test_split(X, y, test_size=0.3, random_state=101)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

regressor = RandomForestRegressor(bootstrap=True, 
            max_features='sqrt',                           
            min_samples_leaf=1,                          
            min_samples_split=2,                            
            n_estimators= 200)                              

regressor.fit(X_train_vect, y_train)

start = time.time()
y_pred = regressor.predict(X_test_vect)
end = time.time()
print('Time to generate predictions on test set: %0.2fs' % (end - start))

err = mean_squared_error(y_test, y_pred)
print("mean squared error based on testing data: ", err)

err_abs = mean_absolute_error(y_test, y_pred)
print("mean absolute error based on testing data: ", err_abs)

err_r2 = r2_score(y_test, y_pred)
print("r2 score based on testing data: ", err_r2)

# NEU
print() 
print("NEUROTICISM")
X = (data['STATUS']).values
y = np.log1p(data['sNEU'].values)
X_train, X_test, y_train, y_test= train_test_split(X, y, test_size=0.3, random_state=101)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

regressor = RandomForestRegressor(bootstrap=True, 
            max_features='sqrt',                           
            min_samples_leaf=1,                          
            min_samples_split=2,                            
            n_estimators= 200)                              

regressor.fit(X_train_vect, y_train)

start = time.time()
y_pred = regressor.predict(X_test_vect)
end = time.time()
print('Time to generate predictions on test set: %0.2fs' % (end - start))

err = mean_squared_error(y_test, y_pred)
print("mean squared error based on testing data: ", err)

err_abs = mean_absolute_error(y_test, y_pred)
print("mean absolute error based on testing data: ", err_abs)

err_r2 = r2_score(y_test, y_pred)
print("r2 score based on testing data: ", err_r2)

# CON
print() 
print("CONSCIENTIOUSNESS")
X = (data['STATUS']).values
y = np.log1p(data['sCON'].values)
X_train, X_test, y_train, y_test= train_test_split(X, y, test_size=0.3, random_state=101)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

regressor = RandomForestRegressor(bootstrap=True, 
            max_features='sqrt',                           
            min_samples_leaf=1,                          
            min_samples_split=2,                            
            n_estimators= 200)                              

regressor.fit(X_train_vect, y_train)

start = time.time()
y_pred = regressor.predict(X_test_vect)
end = time.time()
print('Time to generate predictions on test set: %0.2fs' % (end - start))

err = mean_squared_error(y_test, y_pred)
print("mean squared error based on testing data: ", err)

err_abs = mean_absolute_error(y_test, y_pred)
print("mean absolute error based on testing data: ", err_abs)

err_r2 = r2_score(y_test, y_pred)
print("r2 score based on testing data: ", err_r2)

# AGR
print() 
print("AGREEABLENESS")
X = (data['STATUS']).values
y = np.log1p(data['sAGR'].values)
X_train, X_test, y_train, y_test= train_test_split(X, y, test_size=0.3, random_state=101)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

regressor = RandomForestRegressor(bootstrap=True, 
            max_features='sqrt',                           
            min_samples_leaf=1,                          
            min_samples_split=2,                            
            n_estimators= 200)                              

regressor.fit(X_train_vect, y_train)

start = time.time()
y_pred = regressor.predict(X_test_vect)
end = time.time()
print('Time to generate predictions on test set: %0.2fs' % (end - start))

err = mean_squared_error(y_test, y_pred)
print("mean squared error based on testing data: ", err)

err_abs = mean_absolute_error(y_test, y_pred)
print("mean absolute error based on testing data: ", err_abs)

err_r2 = r2_score(y_test, y_pred)
print("r2 score based on testing data: ", err_r2)