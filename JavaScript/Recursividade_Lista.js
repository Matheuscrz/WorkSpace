//Exemplo: Escreva um programa para calcular a soma dos valores de uma lista.
const soma = (lista) => {
    if (lista.length == 0) {return 0} 
    else {
        const head = lista.slice(0,1)[0]
        const tail = lista.slice(1)
        return (head + soma(tail))
    }
}
//Versão com uso do já conhecido spread para listas
const soma = (lista) => {
    if (lista.length == 0) {return 0} 
    else {
    const [x, ...xs] = lista;
    return x + soma(xs)
    }
}
// Versão com teste acerca de valor indefinido e operador condicional ternário
const indef = x => typeof x == 'undefined'
const soma = ([x, ...xs]) => indef(x) ? 0 : x + soma(xs)
//[EXEMPLO: Lista 06, Q3] Encontrar o último elemento de uma lista qualquer passada.
const ultimo = ([x, ...xs]) => {
    if (indef(x)) return 'Lista vazia' 
    else return ultimoAux([x, ...xs])
}
const ultimoAux = ([x, ...xs]) => {
    if (xs.length == 0) return x
    else return ultimoAux(xs)
}
//[EXEMPLO] Encontrar o maior elemento de uma lista.
const maior = ([x,...xs]) => {
    if (indef(x)) {return 'Lista vazia'}
    else return maiorAux([x,...xs])
}
const maiorAux = ([x,...xs]) => {
    if (xs.length == 0) return x
    else {
        const maior = maiorAux([...xs])
        return (x > maior) ? x : maior
    }
}
//[EXEMPLO] Inverter a ordem dos elementos de uma lista.
const inverte = ([x, ...xs]) => 
    indef(x) ? [] : [...inverte(xs), x]
// [EXEMPLO] Duplicar a presença de cada elemento de uma lista.
const indef = x => typeof x == 'undefined'
const duplica = ([x, ...xs]) => 
    indef(x) ? [] : [x,x,...duplica(xs)]
//[EXEMPLO] Verificar se uma lista possui um determinado elemento.
const elem = (e,[x,...xs]) => {
    if (indef(x)) {return false}
    else return (e===x) || elem(e,[...xs])
}
//[EXEMPLO] Testar se uma string consiste num palíndromo.
const palindromo = (str) => {
    if (str.length < 2) return true
    else {
        const primeiro = str.slice(0,1)
        const ultimo = str.slice(-1)
        const meio = str.slice(1,-1)
        return (primeiro===ultimo) && palindromo(meio)
    }
} 
//Recursividade na Cauda
const f = (n) => {
    return fAux(n,2)
}

const fAux = (n,acc) => {
    if (n == 1) {return acc} 
    else return fAux(n-1,5+acc)
}