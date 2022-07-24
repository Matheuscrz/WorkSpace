const log = (str) => console.log(str) //Função para logar na tela
const indef = x => typeof x == 'undefined' //Função para verificar indefinido
const zip = ([x,...xs],[y,...ys]) => { //Função para fazer zip
if (indef(x)) return [] //Se o primeiro for indefinido, retorna []
else if (indef(y)) return [] //Se o segundo for indefinido, retorna []
else return [[x,y],...zip(xs,ys)] //Se não, retorna o primeiro e o segundo, e chama a função novamente, passando o resto dos elementos
}
log(zip(['a','b','c'],[1,2,3,4,5,6])) //Retorna [['a',1],['b',2],['c',3]]