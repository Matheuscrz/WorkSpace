#importação de modulos
from translate import Translator
from PySimpleGUI import PySimpleGUI as sg
#Função que traduz o texto
def tradutor():
    finalidioma=input('Digite o Idioma Final:')
    text=input('Digite o Texto:')
    translator = Translator(from_lang_autodetect = "" , to_lang = finalidioma )
    result = translator.translate(text)
sg.theme('Reddit')
#Layout
layout = [
    [sg.Text('Idioma'),sg.Input(key='-INPUT-',size=(20,1))],
    [sg.Text('Texto'),sg.Input(Key='-INPUT-',size=(20,1))],
    [sg.Text(key='-OUTPUT-',size=(20,1))],
    [sg.Button('Traduzir')]
]
janela = sg.Window('Translate',layout,)

while True:
    eventos, values =janela.read()
    janela['']
    if eventos == sg.WINDOW_CLOSED:
        break

