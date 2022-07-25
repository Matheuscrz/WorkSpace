function distancia(x1,y1,x2,y2) { 
    //Função Math.abs é pré-definida de Javascript
    //e serve para retornar o módulo de um valor
    //Função Math.sqrt calcula a raiz quadrada
    const x1x2 = Math.abs(x1-x2)
    const y1y2 = Math.abs(y1-y2)
    if (x1 == x2) return y1y2 //paralela à ordenada
    else if (y1 == y2) return x1x2
    else return Math.sqrt(x1x2**2 + y1y2**2) //ou seja, hipotenusa
}

//Experimente testar com outros valores
const ponto1x = 3
const ponto1y = 4
const ponto2x = 6
const ponto2y = 0

const resultado = distancia(ponto1x,ponto1y,ponto2x,ponto2y)

//Texto de saída.
console.log(`Distância entre os pontos é ${resultado}.`)