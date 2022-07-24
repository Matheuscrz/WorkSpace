/*Crie uma função que pega um número e retorna um dígito que é o resultado da
soma de todos os dígitos do número de entrada. Quando a soma dos dígitos
resultar em mais de um dígito, repita a soma até obter um único dígito. Exemplos:
digitosoma(123) ➞ 6 , digitosoma(999888777) ➞ 72 ➞ 9 ,
digitosoma(999999999998) ➞ 107 ➞ 8 .*/
const {composite, log, range, sum, indef} = require('./utils.js')
const digitosoma = (valor) => { //Função principal
const converteEmLista = (v) => { //Função auxiliar
if (v < 10) return [v] //Se o número for menor que 10, retorna [v]
else return converteEmLista(parseInt(v/10)).concat([v%10]) //Se não, chama a função novamente, passando o resto da divisão por 10
}
const somaLista = ([x,...xs]) => { //Função auxiliar
if (indef(x)) return 0 //Se o primeiro for indefinido, retorna 0
else return x+somaLista(xs) //Se não, retorna o primeiro elemento da lista somado com a função novamente, passando o resto da lista
}
const parcial = somaLista(converteEmLista(valor)) //Soma dos dígitos
if (parcial < 10) return parcial //Se o resultado for menor que 10, retorna o resultado
else return digitosoma(parcial) //Se não, chama a função novamente, passando o resultado
}
//EXEMPLOS DE TESTE
const valor1 = 123 //Valor de teste
const valor2 = 999888777
const valor3 = 999999999998
log(`${valor1} = ${digitosoma(valor1)}`)// Resultado
log(`${valor2} = ${digitosoma(valor2)}`)
log(`${valor3} = ${digitosoma(valor3)}`)