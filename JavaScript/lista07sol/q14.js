const {log, indef} = require('./utils.js')
//ATENÇÃO: esta implementação faz uso da entrada síncrona. Ver Apêndice sobre o assunto.
const prompt = require('prompt-sync')()
const nlances =  parseInt(prompt('Quantos lançamentos deseja (min = 1)? '))

//Esta função não é pura pois foi criada apenas 
//para gerar lances aleatórios de dados.
const criaLances = (num) => {
    const face1 = 1+Math.floor(Math.random()*6)
    const face2 = 1+Math.floor(Math.random()*6)
    if (num === 1) return [[face1,face2]]
    else return [[face1,face2]].concat(criaLances(num-1))
}

Array.prototype.pontuacao = function()
{
    const pontAux = (acc,[x,...xs]) => {
        if (indef(x)) return acc
        const [y1,y2] = x
        const pontos = acc+y1+y2
        if (y1===y2) return 0
        else return pontAux(pontos,xs)
    }
    const [x,...xs] = this
    return pontAux(0,[x,...xs])
}

//EXEMPLOS DE TESTE
const lancamentos = criaLances(nlances)
log(lancamentos)
log(`= ${lancamentos.pontuacao()}`)