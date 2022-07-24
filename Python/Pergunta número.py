import random
def pergunta(x):
    valor = int(input('Digite o numero entre 0 e 10:'))
    if valor == x:
        print('Parabéns!')
        print('Voce acertou!')
    else:
        print('Tente novamente!')
        pergunta(x)
x= random.randrange(0,10)
pergunta(x)