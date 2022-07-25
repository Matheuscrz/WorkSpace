function quadrado(x) { 
    return x**2
}

const a = -3

//Idem à questão da comparação entre três números 
//para descobrir o menor.
console.log(`Quarta potência de ${a} é ${quadrado(quadrado(a))}.`)