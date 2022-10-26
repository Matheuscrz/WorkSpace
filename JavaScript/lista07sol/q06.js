const {log, indef} = require('./utils.js')

const acumulado = ([x, ...xs],acc=0) => {
    if (indef(x)) return []
    else {
        const novox = x+acc
        return [novox,...acumulado([...xs],novox)]
    }
}

//EXEMPLO DE TESTE
const casos = [1,2,5,5,13,8,3,1,1,0]
log(`Casos diários: ${casos}. Casos acumulados: ${acumulado(casos)}`) 