//Reconsidere o exemplo sobre as compras de produtos apresentado na aula sobre registros. Seu programa deve ser capaz de: 
//(a) Mostrar o carrinho de compras com o preço dos produtos em outra moeda, aplicando-se alguma taxa de câmbio (ex. 5.5 vezes)
//b) Calcular o valor total gasto com a compra
//c) Calcular o valor total gasto aplicando-se algum desconto
//(d) Calcular o valor total gasto com os produtos frágeis
//(e) Calcular o valor total gasto com produtos que se iniciam com uma determinada letra (ex. letra 'C')
//f) Calcular o valor médio gasto por tipo de produto com a compra realizada.
//Para resolver adequadamente os problemas descritos, seu programa deve fazer uso da notação mais compacta de representação e acesso a dados vista neste tópico e utilizar as três operações sobre coleções de dados estudadas: map, filter e reduce.
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

console.log(`Valor total é ${res1} R$`)
console.log(`Valor total dos itens frágeis é ${res2} R$`)
console.log(`Valor total sem desconto é ${res3} R$`)