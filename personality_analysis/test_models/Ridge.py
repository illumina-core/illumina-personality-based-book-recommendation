import pandas as pd
import numpy as np
import time
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from scipy.sparse import csr_matrix, hstack
from sklearn.linear_model import Ridge
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
X = np.delete(X, [9916])
y = np.log1p(data['sEXT'].values)
y = np.delete(y, [9916])

X_train, X_test = np.array_split(X, 2)
y_train, y_test = np.array_split(y, 2)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

alphas = 10**np.linspace(10,-2,100)*0.5

X_vect = vect.fit_transform(X)

ridge = Ridge(normalize = True)
coefs = []

for a in alphas:
    ridge.set_params(alpha = a)
    ridge.fit(X_vect, y)
    coefs.append(ridge.coef_)

X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)

ridge2 = Ridge(alpha = 4, normalize = True)
ridge2.fit(X_train_vect, y_train)             # Fit a ridge regression on the training data
pred2 = ridge2.predict(X_test_vect)           # Use this model to predict the test data

pipe = Pipeline([('vect',vect),('regressor',ridge2)])
start = time.time()
y_pred = pipe.predict(X_test)
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
X = np.delete(X, [9916])
y = np.log1p(data['sOPN'].values)
y = np.delete(y, [9916])

X_train, X_test = np.array_split(X, 2)
y_train, y_test = np.array_split(y, 2)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

alphas = 10**np.linspace(10,-2,100)*0.5

X_vect = vect.fit_transform(X)

ridge = Ridge(normalize = True)
coefs = []

for a in alphas:
    ridge.set_params(alpha = a)
    ridge.fit(X_vect, y)
    coefs.append(ridge.coef_)

X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)

ridge2 = Ridge(alpha = 4, normalize = True)
ridge2.fit(X_train_vect, y_train)             # Fit a ridge regression on the training data
pred2 = ridge2.predict(X_test_vect)           # Use this model to predict the test data

pipe = Pipeline([('vect',vect),('regressor',ridge2)])
start = time.time()
y_pred = pipe.predict(X_test)
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
X = np.delete(X, [9916])
y = np.log1p(data['sNEU'].values)
y = np.delete(y, [9916])

X_train, X_test = np.array_split(X, 2)
y_train, y_test = np.array_split(y, 2)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

alphas = 10**np.linspace(10,-2,100)*0.5

X_vect = vect.fit_transform(X)

ridge = Ridge(normalize = True)
coefs = []

for a in alphas:
    ridge.set_params(alpha = a)
    ridge.fit(X_vect, y)
    coefs.append(ridge.coef_)

X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)

ridge2 = Ridge(alpha = 4, normalize = True)
ridge2.fit(X_train_vect, y_train)             # Fit a ridge regression on the training data
pred2 = ridge2.predict(X_test_vect)           # Use this model to predict the test data

pipe = Pipeline([('vect',vect),('regressor',ridge2)])
start = time.time()
y_pred = pipe.predict(X_test)
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
X = np.delete(X, [9916])
y = np.log1p(data['sCON'].values)
y = np.delete(y, [9916])

X_train, X_test = np.array_split(X, 2)
y_train, y_test = np.array_split(y, 2)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

alphas = 10**np.linspace(10,-2,100)*0.5

X_vect = vect.fit_transform(X)

ridge = Ridge(normalize = True)
coefs = []

for a in alphas:
    ridge.set_params(alpha = a)
    ridge.fit(X_vect, y)
    coefs.append(ridge.coef_)

X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)

ridge2 = Ridge(alpha = 4, normalize = True)
ridge2.fit(X_train_vect, y_train)             # Fit a ridge regression on the training data
pred2 = ridge2.predict(X_test_vect)           # Use this model to predict the test data

pipe = Pipeline([('vect',vect),('regressor',ridge2)])
start = time.time()
y_pred = pipe.predict(X_test)
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
X = np.delete(X, [9916])
y = np.log1p(data['sAGR'].values)
y = np.delete(y, [9916])

X_train, X_test = np.array_split(X, 2)
y_train, y_test = np.array_split(y, 2)

vect = TfidfVectorizer(stop_words='english', strip_accents='ascii')
start = time.time()
X_train_vect = vect.fit_transform(X_train)
end = time.time()
print('Time to train vectorizer and transform training text: %0.2fs' % (end - start))

alphas = 10**np.linspace(10,-2,100)*0.5

X_vect = vect.fit_transform(X)

ridge = Ridge(normalize = True)
coefs = []

for a in alphas:
    ridge.set_params(alpha = a)
    ridge.fit(X_vect, y)
    coefs.append(ridge.coef_)

X_train_vect = vect.fit_transform(X_train)
X_test_vect = vect.transform(X_test)

ridge2 = Ridge(alpha = 4, normalize = True)
ridge2.fit(X_train_vect, y_train)             # Fit a ridge regression on the training data
pred2 = ridge2.predict(X_test_vect)           # Use this model to predict the test data

pipe = Pipeline([('vect',vect),('regressor',ridge2)])
start = time.time()
y_pred = pipe.predict(X_test)
end = time.time()
print('Time to generate predictions on test set: %0.2fs' % (end - start))

err = mean_squared_error(y_test, y_pred)
print("mean squared error based on testing data: ", err)

err_abs = mean_absolute_error(y_test, y_pred)
print("mean absolute error based on testing data: ", err_abs)

err_r2 = r2_score(y_test, y_pred)
print("r2 score based on testing data: ", err_r2)