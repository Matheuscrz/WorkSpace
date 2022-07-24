// Lista de números primos menores que um número natural n qualquer

const { range, log, equals } = require('./utils.js')
const ehPrimo = (n) => {
    const divisores = range(1,n).filter((x)=>n%x==0)
    return equals(divisores,[1,n])
}
const primosMenoresQ = (n) => range(1,n).filter((x)=>ehPrimo(x))
log(primosMenoresQ(100))