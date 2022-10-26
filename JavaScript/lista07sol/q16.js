const {log, indef} = require('./utils.js')

//Versão prototype
Array.prototype.filter_ = function(f)
{
    const [x,...xs] = this
    if (indef(x)) return []
    else if (f(x)) return [x,...xs.filter_(f)]
    else return [...xs.filter_(f)]
}

//Versão convencional
const filter__ = ([x,...xs]) => (f) => {
    if (indef(x)) return []
    else if (f(x)) return [x,...filter__(xs)(f)]
    else return [...filter__(xs)(f)]
}

//EXEMPLOS DE TESTE
const l1 = [5,6,-6,4,-5,3,-1,0]
log(`filter: ${l1.filter((x)=>x<0)}`)
log(`filter_: ${l1.filter_((x)=>x<0)}`)
log(`filter__: ${filter__(l1)((x)=>x<0)}`)