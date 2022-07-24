/*Uma string é uma substring de outra se os elementos da primeira ocorrem na
segunda, na mesma ordem. Por exemplo, 'ship' é uma substring de
'Fish & Chips' , mas não de 'hippies' . Defina uma função que decida se uma
string é uma substring de outra.*/
const {composite, log, range, sum, indef} = require('./utils.js')
//Uso de String.prototype dessa vez
String.prototype.sublista = function(str) //Função de sublista
{
const sublistaAux = ([x,...xs],[y,...ys]) => { //Função auxiliar
if (indef(y)) return true //Se o segundo for indefinido, retorna true
else if (indef(x)) return false //Se o primeiro for indefinido, retorna false
else if (y===x) return sublistaAux(xs,ys) //Se o primeiro for igual ao segundo, chama a função novamente, passando o resto da lista
else return sublistaAux(xs,[y,...ys]) //Se não, chama a função novamente, passando o resto da lista
}
const lista = str.split('') //Desmembra a string
return sublistaAux(this,lista) //Chama a função auxiliar
}
//EXEMPLOS DE TESTE
const l1 = "4233" //String de teste
const l2 = "412323"
const l3 = "ship"
const l4 = "Fish & Chips"
const l5 = "hippies"
log(`Resultado: ${l2.sublista(l1)}`) //Resultado
log(`Resultado: ${l4.sublista(l3)}`) //Resultado
log(`Resultado: ${l5.sublista(l3)}`) //Resultado