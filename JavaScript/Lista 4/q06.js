const resto = (n) => (m) => {
    if (n<m) return n
    else return resto(n-m)(m)
}
//testar com outros valores
const val1 = 31
const val2 = 7
console.log(`${val1}/${val2} sobra ${resto(val1)(val2)}`)