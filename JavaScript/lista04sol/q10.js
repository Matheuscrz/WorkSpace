/**
 * 
 * Escreva uma função recursiva que retorne o comprimento de uma string.
 * #recursividade 
 * #string
 */
const tamanho = (str) => 
    (str.charAt(0)==='') ? 0 : 1+tamanho(str.slice(1))
console.log(tamanho('Quatro'))  