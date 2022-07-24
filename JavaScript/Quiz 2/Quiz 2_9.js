//Função que retorna a soma do módulo de cada valor de uma lista.
const func = (lista) => lista.reduce((acc, num) => acc + Math.abs(num), 0)
console.log(func([2, -1, 4, 8, 10]))