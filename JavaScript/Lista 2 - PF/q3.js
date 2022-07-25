function podeSerTriangulo(x, y, z) { 
    const somaXY = x+y
    const somaXZ = x+z
    const somaYZ = y+z
    return (somaXY > z && somaXZ > y && somaYZ > x)
}

//Experimente testar com outros valores
const l1 = 2
const l2 = 3
const l3 = 4

const teste = podeSerTriangulo(l1,l2,l3)

//Função auxiliar para ajudar a formar o texto de saída
function auxSN(t) {
    if (t) return ''
    else return 'não'
}
const texto = `Lados ${l1}, ${l2} e ${l3} ${auxSN(teste)} podem formar um triângulo.`
console.log(texto)