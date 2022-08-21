/*
//Exemplo listas:Compras
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const todos = (p1,p2,p3,p4,p5) => 
    p1.qtde * p1.preco +
    p2.qtde * p2.preco +
    p3.qtde * p3.preco +
    p4.qtde * p4.preco +
    p5.qtde * p5.preco

const frageis = (p1,p2,p3,p4,p5) => {
    const parcial1 = p1.fragil ? p1.qtde * p1.preco : 0
    const parcial2 = p2.fragil ? p2.qtde * p2.preco : 0
    const parcial3 = p3.fragil ? p3.qtde * p3.preco : 0
    const parcial4 = p4.fragil ? p4.qtde * p4.preco : 0
    const parcial5 = p5.fragil ? p5.qtde * p5.preco : 0
    return parcial1 + parcial2 + parcial3 + parcial4 + parcial5
}

const desc = (d=0) => (valor) => (1 - d)*valor
const desc10 = desc(0.1)
const desc5 = desc(0.05)

const calcular = (fdesc) => (fcalc) => (p1,p2,p3,p4,p5) => fdesc(fcalc(p1,p2,p3,p4,p5))

const res1 = calcular(desc10)(todos)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])
const res2 = calcular(desc5)(frageis)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])
const res3 = calcular(desc())(todos)(carrinho[0],carrinho[1],carrinho[2],carrinho[3],carrinho[4])

console.log(`Valor total é ${res1}!`)
console.log(`Valor total dos itens frágeis é ${res2}!`)
console.log(`Valor total sem desconto é ${res3}!`)

//Map exemplo
const desconto = (desc) => (lista) => lista.map((x)=>x-x*(desc)/100)
const desconto10 = desconto(10)
const listaProdutosR$ = [10.60,8.50,5.55,6.40,41.00,23.05,19.90,15.90,22.10,2.75]
const resultado = desconto10(listaProdutosR$)
console.log(resultado)

//Filtragem Exemplo
const nomes = ['Felipe','Ana', 'Bia', 'Adele', 'Gui', 'Adam', 'Rafa', 'Maria']

const filtroLetra = (letra) => (texto) => texto[0] == letra
const primeiraLetraA = filtroLetra('A')
console.log(nomes.filter(primeiraLetraA))

const tamanhoMaiorQue = (n) => (texto) => texto.length > n
const tamanhoMaiorQue4 = tamanhoMaiorQue(4)
console.log(nomes.filter(tamanhoMaiorQue4))

//Redução exemplo
somar = (acc, x) => acc + x
const somatorio = (lista) => lista.reduce(somar,0)
const listaProdutosR$ = [10.60,8.50,5.55,6.40,41.00,23.05,19.90,15.90,22.10,2.75]
const resultado = somatorio(listaProdutosR$)
console.log(resultado)

//Composição Exemplo
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

//Arquivos Exemplo sincrono
//Bibliotecas Node para ler arquivos
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//Callback
const exibirConteudo = (_, conteudo) => 
    console.log(conteudo.toString())

console.log('=== INICIO da leitura do arquivo...')
fs.readFile(caminho, exibirConteudo)
console.log('=== FIM da leitura.\n')

console.log('=== INICIO de uma outra operação qualquer...')
const exec = (fn, a, b) => fn(a, b)
const somarNoTerminal = (x, y) => console.log(`Resultado: ${x + y}.`)
exec(somarNoTerminal, 56, 38)
console.log('=== FIM da outra operação.\n')

//Exemplo Assincrono
/Bibliotecas Node para ler arquivos
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//Callback
const exibirConteudo = (_, conteudo) => 
    console.log(conteudo.toString())

console.log('=== INICIO da leitura do arquivo...')
fs.readFile(caminho, exibirConteudo)
console.log('=== FIM da leitura.\n')

console.log('=== INICIO de uma outra operação qualquer...')
const exec = (fn, a, b) => fn(a, b)
const somarNoTerminal = (x, y) => console.log(`Resultado: ${x + y}.`)
exec(somarNoTerminal, 56, 38)
console.log('=== FIM da outra operação.\n')
*/
var array = (n) => {
    if (n == 0) return [];
    return array(n - 1).concat([n]);
};
console.log(array(10))
