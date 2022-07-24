const log = (str) => console.log(str) //Função para logar na tela
const indef = x => typeof x == 'undefined' //Função para verificar indefinido
const filterFirst = (p) => ([x,...xs]) => { //Função para filtrar o primeiro elemento
if (indef(x)) return [] //Se o primeiro for indefinido, retorna []
else return (p(x)) ? xs : filterFirst(p)(xs) //Se não, chama a função novamente, passando o resto dos elementos
}
const filterFirstNeg = filterFirst((x)=>x<0) //Função para filtrar o primeiro elemento negativo
log(filterFirstNeg([0,2,-4,6,-1])) //Retorna [0,2,-4,6]