const {log, indef} = require('./utils.js')

//QUICK SORT
const qSort = ([x, ...xs]) => {
    if (indef(x)) return []
    else {
        const menores = xs.filter((a) => a <= x)
        const maiores = xs.filter((a) => a > x)
        return [...qSort(menores),x,...qSort(maiores)]
    }
}

//EXEMPLO DE TESTE
const lista = [7,15,7,0,-4,11,3]
log(`[Versão 1] Lista [${lista}] ordenada: [${qSort(lista)}]`) 