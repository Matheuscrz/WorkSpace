/*A propriedade length de uma lista retorna o número de elementos presentes
na lista. Por exemplo, a lista [1, [2, 3]] possui 2 elementos: o número 1 e a lista
[2, 3] . Suponha que ao invés disso, queiramos saber o total de elementos não
aninhados na lista. No exemplo anterior, então, teríamos 3 elementos: números 1 ,
2 e 3 . Escreva uma função para realizar esta última contagem.*/
const {composite, log, range, sum, indef} = require('./utils.js')
Array.prototype.length_ = function() //Função de eliminação
{
const desaninhar = ([x,...xs]) => { //Função auxiliar
if (indef(x)) return [] //Se o primeiro for indefinido, retorna []
else if (!(x instanceof Array)) return [x].concat(desaninhar(xs)) //Se o primeiro for um número, retorna [x] e chama a função novamente, passando o resto da lista
else return desaninhar(x).concat(desaninhar(xs)) //Se o primeiro for uma lista, chama a função novamente, passando o primeiro elemento da lista
}
const [x,...xs] = this //Desmembra a lista
if (indef(x)) return 0 //Se a lista for indefinida, retorna 0
else return desaninhar([x,...xs]).length //Se não, retorna a quantidade de elementos não aninhados na lista
}
//EXEMPLOS DE TESTE
const l1 = [[5,[6,6]],4,[5,3,[1,0]]] //Lista de teste
log(`length: ${l1.length}`) //Resultado
log(`length_: ${l1.length_()}`) //Resultado