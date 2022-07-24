/*Escreva um programa para realizar uma Busca Binária em uma lista de
elementos ordenados. Se o elemento existir, retorne sua posição na lista; caso
contrário, retorne -1 (ou algum outro tipo de indicativo de inexistência). Exemplos:
[-4,0,3,7,11].buscabin(7) ---> 3 ; [-4,0,3,7,11].buscabin(1) ---> -1 (ou NaN) .*/
const {composite, log, range, sum, indef} = require('./utils.js')//Importação de utils.js
//VERSÃO 1: COM FUNÇÃO DE INTERFACE, MANUTENÇÃO DA LISTA ORIGINAL
//E ALTERAÇÃO DOS CONTROLES DE INÍCIO E FIM
Array.prototype.buscabin = function (elem) //Função de busca binária
{
const ini = 0 //Controlador de início
const fim = this.length-1 //Controlador de fim
const buscabinAux = (ini,fim) => { //Função auxiliar
if (ini > fim) return -1 //Se o início for maior que o fim, retorna -1
const meio = Math.floor((ini+fim)/2) //Calcula o meio
if (elem === this[meio]) return meio //Se o elemento for o meio, retorna o meio
else if (elem < this[meio]) return buscabinAux(ini,meio-1) //Se o elemento for menor que o meio, chama a função novamente, passando o início e o meio-1
else return buscabinAux(meio+1,fim) //Se o elemento for maior que o meio, chama a função novamente, passando o meio+1 e o fim
}
return buscabinAux(ini,fim) //Chama a função auxiliar
}
//VERSÃO 2: USO DE SUBLISTAS CADA VEZ MENORES E
//USO DE NaN QUANDO NÃO ENCONTRADO
Array.prototype.buscabin2 = function(elem) //Função de busca binária
{
const meio = parseInt(this.length/2) //Calcula o meio
if (elem === this[meio]) return meio //Se o elemento for o meio, retorna o meio
else if (meio === 0) return NaN //Se o meio for 0, retorna NaN
else if (elem < this[meio]) return this.slice(0, meio).buscabin2(elem) //Se o elemento for menor que o meio, chama a função novamente, passando o início e o meio-1
else return meio+this.slice(meio,this.length).buscabin2(elem) //Se o elemento for maior que o meio, chama a função novamente, passando o meio+1 e o fim
}
//EXEMPLOS DE TESTE
const lista = [-4,0,3,7,11,15] //Lista de teste
const elem = 17 //Elemento de teste
log(`[Versão 1] Posição de ${elem} na lista [${lista}]: ${lista.buscabin(elem)}`) //Versão 1
log(`[Versão 2] Posição de ${elem} na lista [${lista}]: ${lista.buscabin2(elem)}`) //Versão 2