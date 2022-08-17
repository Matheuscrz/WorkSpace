//Sequência 
//1, 4, 9, 16, 25, 36, 49, 64, 81, 100...
// const prompt = require('prompt-sync')()
const nesima_raizq = (x, y = x) => {
    if (x <= 0) return `Posição informada deve ser maior que 0!` /*Tratamento para caso valor informado seja negativo ou igual a 0,
    lembrando que não foi considerado a posição zero no código. */
    else if (x === 1) return y /*Caso base - x = 1, verifica se o numero restante de somas suscetivas e igual a 1,
    caso este valor corresponda a 1 ele retorna o valor da soma suscetiva de x vezes do valor de x.*/
    else return y + nesima_raizq(x-1,y) /*Uso da recursividade para somar suscetivamente onde um valor de x representado por y e somado por ele mesmo x vezes. */
}
// const pos = parseInt(prompt('Posição desejada: '))
// console.log(`O ${pos}-ésimo termo da sequência é ${nesima_raizq(pos)}!`)
console.log(`O ${pos}-ésimo termo da sequência é ${nesima_raizq(5)}!`)
