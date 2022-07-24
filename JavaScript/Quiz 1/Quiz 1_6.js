/*Programa para exibir o valor final de um produto após uma dada taxa de desconto ser aplicada
(a taxa pode ser representada por um número decimal: 0.1 representa 10%, por exemplo). Você
deve definir uma função geral de desconto onde a taxa é um parâmetro e o valor do produto é
outro. A seguir, você deve criar funções específicas de desconto (para 10%, 20% e 50% de
desconto) reaproveitando-se da aplicação parcial dessa função geral.*/
const aplicaDesc = (taxa) => (valor) => valor - valor*taxa
const aplicaDesc10 = aplicaDesc(0.1)
const aplicaDesc20 = aplicaDesc(0.2)
const aplicaDesc50 = aplicaDesc(0.5)
console.log(aplicaDesc(0.15)(100))
console.log(aplicaDesc10(100))
console.log(aplicaDesc20(100))
console.log(aplicaDesc50(100))