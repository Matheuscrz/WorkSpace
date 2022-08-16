const nesimo = (n) => {
    if (n==1) return 3
    else return nesimo(n-1)*2
}
//testar com outras posições
const pos = 5
console.log(`O ${pos}-ésimo termo da sequência é ${nesimo(pos)}`)