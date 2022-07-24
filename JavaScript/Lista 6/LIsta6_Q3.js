const ultimo = ([x, ...xs]) => {
    if (indef(x)) return 'Lista vazia' 
    else return ultimoAux([x, ...xs])
}
const ultimoAux = ([x, ...xs]) => {
    if (xs.length == 0) return x
    else return ultimoAux(xs)
}
const lista = [1,2,3,4,5,6,7,8,9,10]
console.log(ultimo(lista))