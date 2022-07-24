//O que será exibido como resultado do programa a seguir?
func = (acc, x) => acc * x
const g = (lista) => lista.reduce(func,1)
const valores = [1,20,100]
const resultado = g(valores)
console.log(resultado)