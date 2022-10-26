const {log, indef} = require('./utils.js')

//Versão convencional
const sublista = (lista) => (str) => 
{
    const sublistaAux = ([x,...xs],[y,...ys]) => {
        if (indef(y)) return true
        else if (indef(x)) return false
        else if (y===x) return sublistaAux(xs,ys)
        else return sublistaAux(xs,[y,...ys])
    } 
    const strsplit = str.split('')
    return sublistaAux(lista,strsplit)
}

//Versão prototype
String.prototype.sublista_ = function(str)
{
    const sublistaAux = ([x,...xs],[y,...ys]) => {
        if (indef(y)) return true
        else if (indef(x)) return false
        else if (y===x) return sublistaAux(xs,ys)
        else return sublistaAux(xs,[y,...ys])
    } 
    const lista = str.split('')
    return sublistaAux(this,lista)
}

//EXEMPLOS DE TESTE
const l1 = "4233"
const l2 = "412323"
const l3 = "ship"
const l4 = "Fish & Chips"
const l5 = "hippies"
log(`Resultado: ${sublista(l2)(l1)}`)
log(`Resultado: ${sublista(l4)(l3)}`)
log(`Resultado: ${sublista(l5)(l3)}`)
log(`Resultado: ${l2.sublista_(l1)}`)
log(`Resultado: ${l4.sublista_(l3)}`)
log(`Resultado: ${l5.sublista_(l3)}`)