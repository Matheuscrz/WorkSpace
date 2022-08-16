const fib = (n) => {
    if (n==1) return 0
    else if (n==2) return 1
    else return fib(n-2) + fib(n-1)
}
//testar com outras posições
const pos = 10
console.log(`O ${pos}-ésimo termo da sequência de Fibonacci é ${fib(pos)}`)