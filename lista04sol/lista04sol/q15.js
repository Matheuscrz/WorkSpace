
/**
 * Um vendedor tem uma série de cidades para visitar. 
 * Deve-se calcular o número total de caminhos possíveis 
 * a percorrer, visitando cada cidade uma vez antes de 
 * regressar à casa. Devolver o número total de caminhos 
 * possíveis que um vendedor pode percorrer, dadas n cidades.
 * Para cidades A, B e C, os caminhos possíveis seriam:
 * A -> B -> C
 * A -> C -> B
 * B -> A -> C
 * B -> C -> A
 * C -> B -> A
 * C -> A -> B
 */
const caminhos = (n) => 
    (n===1)? 1 : n*caminhos(n-1)
console.log(caminhos(3))