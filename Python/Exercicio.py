# -*- coding: utf-8 -*-
lista_far1=[89.6,80.9,77.8,75.7,88.5,87.0,86.4,85.3]
lista_far2=[89.6,82.6,77.8,75.7,88.5,87.0,86.4,85.3,83.4,81.3,81.0,78.8]
lista_celsius1=[]
lista_celsius2=[]
for i in range(len(lista_far1)):
	lista_celsius1.append((lista_far1[i]-32)/1.8)
for i in range(len(lista_far2)):
	lista_celsius2.append((lista_far2[i]-32)/1.8)
