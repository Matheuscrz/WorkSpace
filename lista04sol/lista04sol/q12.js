/**
 * Escreva uma função recursiva que inverte uma string.
 * #recursividade
 * #string
 */
 const inverte = (str) => 
 (str.charAt(0)=='') ? '' : inverte(str.slice(1))+str.charAt(0)
console.log(inverte('programa'))