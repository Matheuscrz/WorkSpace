/* Matheus Lima da Cruz*/
var Ano = []
var Codigo = []
var CH = []
var Freq = []
var Nota = []

const dados = () => {
    Ano.push(document.getElementById("ano").value)
    Codigo.push(document.getElementById("codigo").value)
    CH.push(document.getElementById("ch").value)
    Freq.push(document.getElementById("freq").value)
    Nota.push(document.getElementById("nota").value)
}

//Função que calcula o tempo de curso em períodos
const tempoCurso = (x) => {
    const array = [...new Set(x)]
    const aux = array.map(p => p**0).reduce((p,acc)=> p + acc, 0)
    return aux
}

//Função que calcula a carga horaria total
const chTotal = (x) => {
    return x.reduce((x,acc ) => x + acc ,0)
}

//Função que calcula a média geral ponderada
//OBS: Não comsegui fazer a função de media ponderada sem utilizar laços for, while
const mediaPonterada = (x) => {
    const total = x.reduce((p,acc)=> p + acc,0)
    const aux = x.map(p => p**0).reduce((p,acc) => p + acc, 0)
    return total/aux
}

const DesvioPad = (x,y) => {
    const aux = x.map(x => (x-y)**2).reduce((p,acc) => p + acc, 0)
    const n = x.map(p => p**0).reduce((p,acc)=> p + acc, 0) - 1
    return Math.sqrt(aux/n)
}
console.log(DesvioPad([7.2,8,4.5,6.7,5.5],6.38))

//Função que lista as disciplinas aprovadas
const listaDiciplinasAprov = (x,y) => {
    const aux = x.filter(x => x >= 5)
}

//Função que lista as disciplinas reprovadas
const listaDiciplinasReprov = (x,y) => {
    const aux = x.filter(x => x <5)
}