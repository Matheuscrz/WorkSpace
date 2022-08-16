/**
 * Função para retornar o número de dígitos do valor total de 
 * permutações possíveis para o conjunto formado por n elementos
 * diferentes. O valor de n é a entrada da função.
 * Ex: ndigitospermut(5) ---> 3 porque 5 elementos diferentes permitem 
 * 120 permutações e como 120 possui três dígitos.... resultado = 3.
 */
const ndigitospermut = (n) => {
    const ndigitos = (n) => {
        //quando n é muito grande (o que é usual ao se aplicar o fatorial),
        //JS representa o inteiro na notação científica (ex: 1.345e+25),
        //o que muda o algoritmo para contar o número de dígitos: nesse caso,
        //transformo em string, identifico a posição do caracter '+' e 
        //retorno o número que vem a seguir do '+' adicionado de 1; esse
        //é exatamente a quantidade de dígitos.
        const str = n.toString()
        const pos = str.search(/\+/) 
        if (pos > -1) return 1+parseInt(str.slice(pos))
        //Para números não tão gigantescos, aplicamos a lógica algoritma
        //recursiva usual para contar o número de dígitos.
        else if (n<10) return 1
        else return 1+ndigitos(parseInt(n/10))
    }
    const fat = (n) => n===0? 1 : n*fat(n-1)
    return ndigitos(fat(n))
}
console.log(ndigitospermut(10))