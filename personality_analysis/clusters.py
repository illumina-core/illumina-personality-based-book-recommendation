import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import time
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import normalize
from sklearn.cluster import AgglomerativeClustering

# Importing dataset
data = pd.read_csv("data/proper_pers_values.csv",encoding='latin1')
data = data.drop(columns=['ID','Title', 'Clusters', 'Unnamed: 8', 'Unnamed: 9', 'Unnamed: 10', 'Unnamed: 11', 'Unnamed: 12'])

data_scaled = normalize(data)
data_scaled = pd.DataFrame(data_scaled, columns=data.columns)
data_scaled.head()
print(data_scaled.head())

X = data_scaled.values
model = AgglomerativeClustering(n_clusters=30, affinity='euclidean', linkage='ward')
model.fit(X)

labels = model.labels_
print(labels)

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

new_data = pd.read_csv("data/proper_pers_values.csv",encoding='latin1')
new_data = new_data[['ID']]
new_data['Clusters'] = labels 
new_data.to_csv('clusters.csv')