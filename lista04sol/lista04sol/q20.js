/**
 * A operação de deslocamento de bit à direita (shift right) é semelhante 
 * ao piso (floor) da divisão de inteiros por potências de 2. Portanto, 
 * o processo é repetitivo e pode ser feito de forma recorrente.
 * Existe um operador para realizar essa operação de deslocamente em JS; 
 * trata-se do operador lógico `>>`.
 * Você deve criar uma função que imita esse operador, sem usar o operador, obviamente!
 * Ex: deslocaDir(80,3) ---> 10 pois $80/2^3=10$. Veja que deslocamento à direita 
 * significa deslocar 3 bits para a direita na representação binária do número. 
 * Ou seja, se $80_2=1010000$, ao deslocarmos 3 bits para direita, temos $0001010$, que
 * corresponde ao número 10 em binário. Voilà!
 */
const deslocaDir = (bits) => (num) => {
    if (bits==0) return num
    if (bits==1) return Math.floor(num/2)
    else return deslocaDir(bits-1)(Math.floor(num/2))
}
console.log(deslocaDir(3)(80))