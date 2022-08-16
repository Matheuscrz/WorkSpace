const mdc = (n) => (m) => {
    if (n<m) return mdc(m)(n)
    else if (m==0) return n
    else return mdc(n-m)(m)
}

//MMC a,b = a*b / MDC a,b 
const mmc = (n) => (m) => n*m / mdc(n)(m)

//testar com outros valores
const val1 = 12
const val2 = 10
console.log(`MMC ${val1},${val2} = ${mmc(val1)(val2)}`)