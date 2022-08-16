const quociente = (n) => (m) => {
    if (n<m) return 0
    else return 1+quociente(n-m)(m)
}
//testar com outros valores
const val1 = 31
const val2 = 7
console.log(`${val1}/${val2} = ${quociente(val1)(val2)}`)