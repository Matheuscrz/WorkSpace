//Função para calcular área de um quadrado.
const ret = (x) => (y) => x*y
const func = (x) => ret(x)(x)
console.log(func(8))