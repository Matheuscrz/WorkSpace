from PySimpleGUI import PySimpleGUI as sg
sg.theme('Reddit')
#Layout
layout = [
    [sg.Text('Usuário'),sg.Input(key='usuario',size=(20,1))],
    [sg.Text('Senha'),sg.Input(key='senha',password_char='*',size=(20,1))],
    [sg.Checkbox('Salvar login?')], 
    [sg.Button('Entrar')]
    ]
#Janela
janela = sg.Window('Tela de Login',layout)
#Ler eventos
while True:
    eventos,valores = janela.read()
    if eventos == sg.WINDOW_CLOSED:
        break
    elif eventos == 'Entrar':
        if valores['usuario'] == 'Matheus'and valores['senha'] == '1505':
            print('Bem-Vindo!')