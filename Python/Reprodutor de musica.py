import pygame 
import tkinter as tkr 
from tkinter.filedialog import askdirectory 
import os

musica_player = tkr.Tk() 
musica_player.title('Reprodutor')
musica_player.geometry('450x350')

diretorio = askdirectory()
os.chdir(diretorio) 
som_lista = os.listdir() 

playlist = tkr.Listbox(musica_player, font='Helvetica 10 bold', bg='white', selectmode=tkr.SINGLE)
for item in som_lista:
    pos = 0
    playlist.insert(pos, item)
    pos += 1

pygame.init()
pygame.mixer.init()

def play():
    pygame.mixer.music.load(playlist.get(tkr.ACTIVE))
    var.set(playlist.get(tkr.ACTIVE))
    pygame.mixer.music.play()
def stop():
    pygame.mixer.music.stop()
def pause():
    pygame.mixer.music.pause()
def unpause():
    pygame.mixer.music.unpause()

Button1 = tkr.Button(musica_player, width=5, height=3, font='Helvetica 10 bold', text='Play', command=play, bg='black', fg='white')
Button2 = tkr.Button(musica_player, width=5, height=3, font='Helvetica 10 bold', text='Stop', command=stop, bg='red', fg='white')
Button3 = tkr.Button(musica_player, width=5, height=3, font='Helvetica 10 bold', text='Pause', command=pause, bg='black', fg='white')
Button4 = tkr.Button(musica_player, width=5, height=3, font='Helvetica 10 bold', text='UNPAUSE', command=unpause, bg='red', fg='white')

var = tkr.StringVar() 
titulo_musica = tkr.Label(musica_player, font='Helvetica 10 bold', textvariable=var)

titulo_musica.pack()
Button1.pack(fill='x')
Button2.pack(fill='x')
Button3.pack(fill='x')
Button4.pack(fill='x')
playlist.pack(fill='both', expand='yes')
musica_player.mainloop()