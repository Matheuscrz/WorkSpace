const fat = (n) => {
    if (n==0) return 1
    else return n*fat(n-1)
}
//testar com outros valores
const val = 5
console.log(`Fatorial de ${val} = ${fat(val)}`)