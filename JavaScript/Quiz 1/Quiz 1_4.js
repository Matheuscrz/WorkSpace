/*Programa para converter temperaturas entre graus Celsius e graus Fahrenheit (e vice-versa).
Escreva uma função para cada conversão. Cada função deve realizar a conversão e retornar
uma string com o seguinte padrão textual: <valor>°C = <valor>°F (e vice-versa). Depois,
mande exibir no console os textos gerados. Exemplo do que será exibido para conversão de 60
graus celsius para fahrenheit: 60°C = 140°F . Dica: o char '\xB0' representa o símbolo ° .*/
const c2f = (celsius) => {
    const fahrenheit = celsius * 9 / 5 + 32
    const msg = `${celsius}\xB0C = ${fahrenheit}\xB0F.`
    return msg
    }
    const f2c = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9
    const msg = `${fahrenheit}\xB0F = ${celsius}\xB0C.`
    return msg
    }
    console.log(c2f(60))
    console.log(f2c(45))