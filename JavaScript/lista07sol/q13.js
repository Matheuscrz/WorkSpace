const {log, sum} = require('./utils.js')

const digitosoma = (valor) => {

    const converteEmLista = (v) => {
        if (v < 10) return [v]
        else return converteEmLista(parseInt(v/10)).concat([v%10]) 
    }
    const parcial = sum(converteEmLista(valor))
    if (parcial < 10) return parcial
    else return digitosoma(parcial)
}

//EXEMPLOS DE TESTE
const valor1 = 123
const valor2 = 999888777
const valor3 = 999999999998
log(`${valor1} = ${digitosoma(valor1)}`)
log(`${valor2} = ${digitosoma(valor2)}`)
log(`${valor3} = ${digitosoma(valor3)}`)