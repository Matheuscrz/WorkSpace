/*Defina uma função que, dada uma lista, retorne a (sub)lista contendo os
elementos que ocorrem exatamente uma vez na lista original. Exemplos:
[4,2,1,3,2,3].unicos() ---> [4,1] ; [1,4,4,2,1,3,2,3].unicos() ---> []*/
const {composite, log, range, sum, indef} = require('./utils.js') //Importação de utils.js
Array.prototype.unicos = function() //Função de eliminação
{
//função auxiliar que conta o número de ocorrências
//de elem
const conta = (elem,[y,...ys]) => { //Função auxiliar
if (indef(y)) return 0 //Se o segundo for indefinido, retorna 0
else return (elem === y) ? 1+conta(elem,ys) : conta(elem,ys) //Se não, retorna 1 se o primeiro for igual ao segundo, e chama a função novamente, passando o resto da lista
}
//corpo da função principal que faz uso do 'elimina' da questão anterior
const [x, ...xs] = this //Desmembra a lista
log(this) //Loga a lista original
if (indef(x)) return [] //Se a lista for indefinida, retorna []
if (conta(x,xs) !== 0) return [x, ...xs].elimina(x).unicos() //Se o primeiro elemento não for o elemento, retorna o primeiro elemento e chama a função novamente, passando o resto da lista
else return [x].concat(xs.unicos()) //Se o primeiro elemento for o elemento, retorna o primeiro elemento e chama a função novamente, passando o resto da lista
}
//EXEMPLOS DE TESTE
const lista = [4,2,1,3,2,3] //Lista de teste
log(`Resultado: ${lista.unicos()}`) //Resultado