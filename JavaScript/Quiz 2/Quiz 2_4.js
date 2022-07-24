//Que alternativa exibe corretamente o IMC do indivíduo?
const imc = (peso) => (altura) => peso/(altura**2)
const individuo = { nome: 'Fulano da Silva',
    nascimento: 1985,
    altura: 1.78,
    peso: 75.3,
    naturalidade: 'Aracaju' 
}
console.log(`IMC = ${imc(individuo.peso)(individuo.altura)}`)