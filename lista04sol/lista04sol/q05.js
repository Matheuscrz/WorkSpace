const pot2n = (n) => {
    if (n==0) return 1
    else return 2*pot2n(n-1)
}
//testar com outros valores
const val = 7
console.log(`₂${val} = ${pot2n(val)}`)