/**
 * "A Conjectura de Collatz"
 * Considere a seguinte operação sobre um número inteiro positivo arbitrário:
 * Se n é par -> n / 2
 * Se n é ímpar -> n * 3 + 1
 * Criar uma função para avaliar repetidamente estas operações, até atingir 1. 
 * Devolver o número de passos realizados.
 * Ver o exemplo seguinte, usando 10 como entrada, com 6 passos:
 * 1. 10 is even - 10 / 2 = 5
 * 2. 5 is odd - 5 * 3 + 1 = 16
 * 3. 16 is even - 16 / 2 = 8
 * 4. 8 is even - 8 / 2 = 4
 * 5. 4 is even - 4 / 2 = 2
 * 6. 2 is even - 2 / 2 = 1 -> Atingiu 1, portanto, retorna 6 (passos).
 */
const collatz = (n) => {
    if (n===1) return 0
    else if (n%2===0) return 1+collatz(n/2)
    else return 1+collatz(n*3+1)
}
console.log(collatz(10))