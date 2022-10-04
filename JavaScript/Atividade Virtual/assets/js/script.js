/* Matheus Lima da Cruz*/
var Ano = []
var Codigo = []
var CargaH = []
var Freq = []
var Nota = []

const dados = () => {
    var a = document.getElementById("ano").value
    Ano.push(a)
    var b = document.getElementById("codigo").value
    Codigo.push(b)
    var c = document.getElementById("ch").value
    CargaH.push(c)
    var d = document.getElementById("freq").value
    Freq.push(d)
    var e = document.getElementById("nota").value
    Nota.push(e)
}

//Função que converte os valores de String para Double
const converte = (x) => {
    const array =  x.map(Number)
    return array
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

//Função que lista as disciplinas aprovadas
const listaDiciplinasAprov = (x,y) => {
    const aux = x.filter(x => x >= 5)
}

//Função que lista as disciplinas reprovadas
const listaDiciplinasReprov = (x,y) => {
    const aux = x.filter(x => x <5)
}  

const Processar = () => {
    const p1 = tempoCurso(converte(Ano))
    const p2 = mediaPonterada(converte(Nota)).toFixed(2)
    const p3 = DesvioPad(converte(Nota),p2).toFixed(2)
    const p4 = chTotal(converte(CargaH))
    const resultado = `Tempo de Curso em Períodos: ${p1} \n Media: ${p2} \n Desvio Padrão: ${p3} \n Carga Horaria Total: ${p4}`
    document.getElementById("output").innerHTML = resultado
}