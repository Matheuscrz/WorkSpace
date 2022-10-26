const {log, indef} = require('./utils.js')

//Versão prototype
Array.prototype.map_ = function(f)
{
    const [x,...xs] = this
    if (indef(x)) return []
    else return [f(x),...xs.map_(f)]
}

//Versão convencional
const map__ = ([x,...xs]) => (f) => {
    if (indef(x)) return []
    else return [f(x),...map__(xs)(f)]
}

//EXEMPLOS DE TESTE
const l1 = [5,6,6,4,5,3,1,0]
log(`map: ${l1.map((x)=>x*x)}`)
log(`map_: ${l1.map_((x)=>x*x)}`)
log(`map__: ${map__(l1)((x)=>x*x)}`)