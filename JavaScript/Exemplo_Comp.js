// [EXEMPLO] Crie um programa para contar o número de caracteres de cada palavra de uma lista, multiplicar esse valor por 3 e depois gerar uma lista crescente dessa lista resultante. 
// Você deve compor as funções de contagem, de triplicação e de ordenação em uma única função.

const contagem = (lista) => lista.map((texto) => texto.length)
const triplo = (lista) => lista.map((x) => 3*x)
const ordena = (lista) => lista.sort((a,b) => a-b)

const composicao = (...fns) => (lista) => fns.reduce((acc,fn) => fn(acc), lista)

const geraResultado = composicao(
    contagem,
    triplo,
    ordena
)

const nomes = ['Ana Beatriz', 'Bia', 'Guilherme', 'João', 'Rafael']

console.log(geraResultado(nomes))