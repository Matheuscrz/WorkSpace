const log = (str) => console.log(str) //Função para logar na tela
const indef = x => typeof x == 'undefined' //Função para verificar indefinido
//Versão função expressão
const crescente = ([x,y,...ys]) => { //Função para verificar se é crescente
if (indef(x) || indef(y)) return true //Se algum dos dois for indefinido, retorna true
if (x>y) return false //Se o primeiro for maior que o segundo, retorna false
else return crescente([y,...ys]) //Se não, chama a função novamente, passando o segundo como primeiro
}
log(crescente([3,4,4,8,8,10,9])) //Retorna true
log(crescente([3,4,8,8,10])) //Retorna false
//Versão função objeto
Array.prototype.crescente = function() { //Função para verificar se é crescente
const [x,y,...ys] = this //Pega o primeiro elemento do array
if (indef(x) || indef(y)) return true //Se algum dos dois for indefinido, retorna true
if (x>y) return false //Se o primeiro for maior que o segundo, retorna false
else return [y,...ys].crescente() //Se não, chama a função novamente, passando o segundo como primeiro
}
log([3,4,4,8,8,10,9].crescente()) //Retorna true
log([3,4,8,8,10].crescente()) //Retorna false