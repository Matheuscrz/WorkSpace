function fareaRet(x, y) { 
    return x*y
}

const l1 = 6.1
const l2 = 4.4

const area = fareaRet(l1,l2) 

//Compor texto na saída para ajudar o usuário
const texto = `Retângulo de lados ${l1} e ${l2} tem área igual à ${area}.`
console.log(texto)

