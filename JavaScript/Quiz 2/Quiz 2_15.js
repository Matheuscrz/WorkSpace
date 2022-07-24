//O que será exibido como resultado do programa a seguir?
const func = (acc, x) => acc + x[0]
const termos = ['Comunicador', 'Operacional', 'Máquina', 'Programa']
console.log(termos.reduce(func,'D'))