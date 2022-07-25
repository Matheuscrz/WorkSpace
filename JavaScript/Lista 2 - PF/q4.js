function podeSerTriangulo(x, y, z) { 
    const somaXY = x+y
    const somaXZ = x+z
    const somaYZ = y+z
    return (somaXY > z && somaXZ > y && somaYZ > x)
}

function tipoTriangulo(x, y, z) {
    //A primeira constante abaixo é verdade se todos lados forem iguais.
    //A segunda é verdade se todos forem diferentes.
    //Não sendo nenhum dos dois casos, então.... :)
    const iguaisXYZ = x==y && y==z
    const difXYZ = x!=y && x!=z && y!=z
    if (iguaisXYZ) return 'Equilátero'
    else if (difXYZ) return 'Escaleno'
    else return 'Isósceles'
}

//Experimente testar com outros valores
const l1 = 3
const l2 = 4
const l3 = 3

//Texto de saída. Estou aproveitando o teste da questão anterior. ;)
if (podeSerTriangulo(l1, l2, l3)) {
    console.log(`Triângulo ${tipoTriangulo(l1, l2, l3)}.`)
} else console.log('Não é triângulo!') 