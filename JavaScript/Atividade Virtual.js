const prompt = require('prompt-sync')()
const nesima_raizq = (n) => {
    if (n <= 0) return `Posição informada deve ser maior que 0!` /*Tratamento para caso valor informado seja negativo ou igual a 0,
    lembrando que não foi considerado a posição zero no código. */
    else if (n === 1) return n //Caso base
    else return mult(n) //Retorna o valor da posição n dos números naturais que resulta no valor dele multiplicado por ele mesmo.
}
/*Função de multiplicação */
const mult = (x, y = x) => {
    if(x === 0) return 0 //Caso base 1 - x = 0 que resultaria em 0 * 0
    else if (x === 1) return y /*Caso base 2 - x = 1, verifica se o numero restante de somas suscetivas e igual a 1,
    caso este valor corresponda a 1 ele retorna o valor da soma suscetiva de x vezes do valor de x.*/
    else return y + mult(x-1,y) /*Uso da recursividade para somar suscetivamente onde um valor de x representado por y e somado por ele mesmo x vezes. */
}
const pos = parseInt(prompt('Posição desejada: '))
console.log(`O ${pos}-ésimo termo da sequência é ${nesima_raizq(pos)}!`)
