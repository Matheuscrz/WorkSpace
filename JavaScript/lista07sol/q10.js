const {log, indef} = require('./utils.js')

//Mesma função da questão anterior
Array.prototype.elimina_ = function(elem)
{
    const [x, ...xs] = this
    if (indef(x)) return []
    else {
        if (x === elem) return [...xs].elimina_(elem)
        else return [x].concat([...xs].elimina_(elem))
    }
}

Array.prototype.unicos = function()
{
    //função auxiliar que conta o número de ocorrências de elem
    const conta = (elem,[y,...ys]) => {
        if (indef(y)) return 0
        else return (elem === y) ? 1+conta(elem,ys) : conta(elem,ys)
    }

    //corpo da função principal que faz uso do elimina da questão anterior
    const [x, ...xs] = this
    // log(this)
    if (indef(x)) return []
    if (conta(x,xs) !== 0) return [x, ...xs].elimina_(x).unicos()
    else return [x].concat(xs.unicos())
}

//EXEMPLOS DE TESTE
const lista = [4,2,1,3,2,3]
log(`Resultado: [${lista.unicos()}]`)