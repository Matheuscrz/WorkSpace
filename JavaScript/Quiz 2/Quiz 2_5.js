//Como calcular o dobro de cada valor de uma lista?
const func = (x) => (lista) => lista.map(e => x*e)
const duplica = func(2)
console.log(duplica([1,2,3]))