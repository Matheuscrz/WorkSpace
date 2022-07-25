function fareaEli(x, pi=3.14) { 
    return pi*(x**2)
}

const raio = 5.0

//Se não informarmos o valor de pi, ele usa o padrão
//já pré-definido no parâmetro durante a definição da 
//função. Ou seja, o valor 3.14.
const area = fareaEli(raio) 

//Compor texto na saída para ajudar o usuário
const texto = `Circunferência de raio ${raio} tem área igual à ${area}.`
console.log(texto)