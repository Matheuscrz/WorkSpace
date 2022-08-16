const somaN = (n) => {
    if (n==1) return 0
    else return (n-1)+somaN(n-1)
}
//testar com outros valores
const val = 5
console.log(`Soma dos ${val} primeiros naturais é ${somaN(val)}`)