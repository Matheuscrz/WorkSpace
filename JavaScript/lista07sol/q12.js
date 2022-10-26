const {log, indef} = require('./utils.js')

Array.prototype.length_ = function()
{
    const desaninhar = ([x,...xs]) => {
        if (indef(x)) return []
        else if (!(x instanceof Array)) return [x].concat(desaninhar(xs))
        else return desaninhar(x).concat(desaninhar(xs))
    }
    const [x,...xs] = this
    if (indef(x)) return 0
    else return desaninhar([x,...xs]).length
}

//EXEMPLOS DE TESTE
const l1 = [[5,[6,6]],4,[5,3,[1,0]]]
log(`length: ${l1.length}`)
log(`length_: ${l1.length_()}`)