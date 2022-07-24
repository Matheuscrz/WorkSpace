import tkinter as tk
import PySimpleGUI as sg
import os.path
coluna_arquivos= [
    [sg.Text('Arquivos de Imagem'),sg.In(size=(25,1), enable_events=True, key='-FOLDER-'), sg.FolderBrowse()],
    [sg.Listbox(values=[],enable_events=True, size=(40,20),key='-FILE LIST-')],
]
coluna_visualizador=[
    [sg.Text('Escolha uma imagem da lista à esquerda:')],
    [sg.Text(size=(40,1),key='-TOUT-')],
    [sg.Image(key='-IMAGE-')],
]
layout = [
    [sg.Column(coluna_arquivos),sg.VSeparator(),sg.Column(coluna_visualizador)]
]
janela = sg.Window('Visualizador de Imagens',layout)
while True:
    eventos, valores =janela.read()
    if eventos == sg.WINDOW_CLOSED or eventos == 'Exit':
        break
    if eventos=='-FOLDER-':
        folder= valores['-FOLDER-']
        try:
            lista_arquivos=os.listdir(folder)
        except:
            lista_arquivos=[]
        lista_nomes=[ f for f in lista_arquivos if os.path.isfile(os.path.join(folder, f)) and f.lower().endswith(('.png','.gif'))]
        janela['-FILE LIST-'].update(lista_nomes)
    elif eventos == '-FILE LIST-': 
        try:
            arquivo_nome = os.path.join(valores['-FOLDER-'], valores['-FILE LIST-'][0])
            janela['-TOUT-'].update(arquivo_nome)
            janela['-IMAGE-'].update(filename=arquivo_nome)
        except :
            pass
janela.close()
