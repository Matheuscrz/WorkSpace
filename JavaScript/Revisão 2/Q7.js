/*Crie um programa para representar um joguinho de dados simples. O usuário
escolhe quantas vezes ele deseja jogar um par de dados. A pontuação será a soma
total de todos os lançamentos. Entretanto, se algum lançamento gerar um valor
duplo, a pontuação total será zerada. Represente o lançamento de cada par de
dados como uma lista com dois elementos e o conjunto total de lançamentos seria
então uma lista de listas. Exemplos: pontuacao([[5, 2], [4, 3], [5, 6]]) ➞ 25 ,
pontuacao([[5, 6], [1, 1], [6, 4], [6, 3]]) ➞ 0 .*/
const {composite, log, range, sum, indef} = require('./utils.js')
const prompt = require('prompt-sync')() //Importa prompt-sync
const nlances = parseInt(prompt('Quantos lançamentos deseja (min = 1)? ')) //Lê número de lançamentos
const criaLances = (num) => { //Função auxiliar
const face1 = 1+Math.floor(Math.random()*6) //Gera número aleatório entre 1 e 6
const face2 = 1+Math.floor(Math.random()*6) //Gera número aleatório entre 1 e 6
if (num === 1) return [[face1,face2]] //Se o número de lançamentos for 1, retorna a lista com o primeiro lançamento
else return [[face1,face2]].concat(criaLances(num-1)) //Se não, chama a função novamente, passando o número de lançamentos - 1
}
Array.prototype.pontuacao = function() //Função de pontuação
{
const pontAux = (acc,[x,...xs]) => { //Função auxiliar
if (indef(x)) return acc //Se o primeiro for indefinido, retorna a pontuação
const [y1,y2] = x //Desmembra o primeiro elemento
const pontos = acc+y1+y2 //Soma a pontuação com os dois elementos
if (y1===y2) return 0 //Se os dois elementos forem iguais, retorna 0
else return pontAux(pontos,xs) //Se não, chama a função novamente, passando a pontuação e o resto da lista
}
const [x,...xs] = this //Desmembra a lista
return pontAux(0,[x,...xs]) //Chama a função novamente, passando a pontuação e o resto da lista
}
//EXEMPLOS DE TESTE
const lancamentos = criaLances(nlances) //Lista de teste
log(lancamentos) //Lançamentos
log(`= ${lancamentos.pontuacao()}`) //Pontuação