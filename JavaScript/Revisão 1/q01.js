// Somar os múltiplos de 3 e 5 menores que 1000

// const u = require('./utils.js')

// const multiplos35menores1000 = () => {
//     const lista = u.range(0,999,1).filter((x) => (x%3==0 || x%5==0))
//     return lista.reduce((acc,x)=>acc+x,0)
// }
// console.log(multiplos35menores1000())

const {composite, log, range, sum} = require('./utils.js')

const multiplos = (...params) => (n) => {
    const lista = range(0,n-1,1).filter((x) => (x%params[0]==0 || x%params[1]==0))
    return sum(lista)
}
const multiplos35 = multiplos(3,5)
const multiplos57 = multiplos(5,7)

log(multiplos35(1000))
log(multiplos57(1000))