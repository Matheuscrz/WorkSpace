const log = (str) => console.log(str) //Função para logar na tela
const indef = x => typeof x == 'undefined' //Função para verificar indefinido
const merge = ([x,...xs]) => ([y,...ys]) => { //Função para fazer merge
if (indef(x)) return [y,...ys] //Se o primeiro for indefinido, retorna o segundo
else if (indef(y)) return [x,...xs] //Se o segundo for indefinido, retorna o primeiro
else return [x,y,...merge(xs)(ys)] //Se não, retorna o primeiro e o segundo, e chama a função novamente, passando o resto dos elementos
}
log(merge([1,3,5])([2,4])) //Retorna [1,2,3,4,5]