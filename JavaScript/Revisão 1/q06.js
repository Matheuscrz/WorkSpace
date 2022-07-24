// Replicar os elementos de uma lista um determinado número de vezes.

const { log } = require('./utils.js')

const replicaN = (n) => (lista) => {
    return (lista.map((x)=>Array(n).fill(x))).flat()
}

const duplica = replicaN(2)

const exemplo1 = [1,2,3]
const exemplo2 = ['Ana','Maria', 'Estela']

log(replicaN(5)(exemplo1))
log(duplica(exemplo2))
