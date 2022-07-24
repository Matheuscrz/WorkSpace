import random
def entrada():
    numero1 = int(input('Digite o primeiro valor do intervalo:'))
    numero2 = int(input('Digite o segundo valor do intervalo:'))
    aleatorio(numero1,numero2)
    load()
def load():
    p = input('Deseja gerar outro numero? S/N: ')
    if p == 'S' or p == 's':
        entrada()
    elif p == 'N' or p == 'n':
        print('Programa encerrado.')
    else:
        print('Digite  como informado!')
        load()
def aleatorio(n1,n2):
    print(random.randrange(n1,n2))
entrada()
