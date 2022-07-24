/*Função para eliminar de uma lista todas as ocorrências de um dado elemento.
Exemplo: [-4,0,3,7,11].elimina(7) ---> [-4,0,3,11] .*/
const {composite, log, range, sum, indef} = require('./utils.js') //Importação de utils.js
//Uso de indef para testar lista vazia e operador spread para
//deixar mais claro o padrão de recursividade em listas
Array.prototype.elimina = function(elem) //Função de eliminação
{
const [x, ...xs] = this //Desmembra a lista
if (indef(x)) return [] //Se a lista for indefinida, retorna []
else {
if (x === elem) return [...xs].elimina(elem) //Se o primeiro elemento for o elemento, chama a função novamente, passando o resto da lista
else return [x].concat([...xs].elimina(elem)) //Se o primeiro elemento não for o elemento, retorna o primeiro elemento e chama a função novamente, passando o resto da lista
}
}
//EXEMPLOS DE TESTE
const lista = [-4,0,3,3,11,15,3,1] //Lista de teste
const elem = 3 //Elemento de teste
log(`Resultado: ${lista.elimina(elem)}`) //Resultado