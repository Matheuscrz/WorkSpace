// Diferença entre o quadrado da soma dos 10 primeiros números naturais 
// e a soma dos quadrados dos primeiros 10 números naturais
// Ou seja, (1+2+3+...+10)**2 - (1**2 + 2**2 + 3**2 + ... + 10**2) 

// const u = require('./utils.js')

// const naturais10 = u.range(1,10)
// const naturais10quad = naturais10.map((x)=>x**2)
// const somaNaturais10quad = u.sum(naturais10quad)
// const quadSomaNaturais10 = u.sum(naturais10)**2

// const dif = quadSomaNaturais10 - somaNaturais10quad
// u.log(dif)

const {log, range, sum} = require('./utils.js')

const naturaisN = (n) => range(1,n)
const naturaisNPot = (n) => (pot) => naturaisN(n).map((x)=>x**pot)
const somaNaturais10quad = sum(naturaisNPot(10)(2))
const quadSomaNaturais10 = sum(naturaisN(10))**2
const dif = quadSomaNaturais10 - somaNaturais10quad
log(dif)

