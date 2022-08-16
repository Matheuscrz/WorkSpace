/**
 * Dado um número, devolva a soma total desse número 
 * multiplicado por cada número entre 1 e 10.
 * #recursividade
 * #matemática
 */
const multiSoma = (n,count=10) => {
    if (count==0) return 0
    else return n*count+multiSoma(n,count-1)
}
console.log(multiSoma(5))