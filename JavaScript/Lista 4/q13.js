/**
 * Criar uma função que calcula a soma dos quadrados diferentes até um número n. 
 */
const somaQuadrados = (n) =>
    (n==0)? 0 : n**2+somaQuadrados(n-1)
console.log(somaQuadrados(4))