const {log, indef} = require('./utils.js')

//Versão prototype
Array.prototype.reduce_ = function(f,acc)
{
    const [x,...xs] = this
    if (indef(x)) return acc
    else return xs.reduce_(f,f(x,acc))
}

//Versão convencional
const reduce__ = ([x,...xs]) => (f,acc) => {
    if (indef(x)) return acc
    else return reduce__(xs)(f,f(x,acc))
}

//EXEMPLOS DE TESTE
const l1 = [5,-1,6]
log(`reduce: ${l1.reduce((x,acc)=>x*acc,1)}`)
log(`reduce_: ${l1.reduce_((x,acc)=>x*acc,1)}`)
log(`reduce__: ${reduce__(l1)((x,acc)=>x*acc,1)}`)