import requests
from bs4 import BeautifulSoup
pesquisa = "Clima em Nossa Senhora do Socorro"
url = f"https://www.google.com/search?&q={pesquisa}"
r = requests.get(url)
s = BeautifulSoup(r.text,"html.parser")
update = s.find("div",class_="BNeawe").text
print(f'A temperatura em Nossa Senhora do Socorro é: {update}')