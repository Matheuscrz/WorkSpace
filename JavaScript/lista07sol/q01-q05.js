/**
 * 
 * Importa funções auxiliares
 */
const {indef} = require('./utils.js')

/**
 * Criar uma função que busca o índice de um determinado item 
 * em uma lista ORDENADA. Se o item estiver presente, ele deve 
 * retornar o índice, caso contrário, deve retornar -1.
 * #recursividade 
 * #lista
 */
const busca = ([x,...xs],elem,acc=0) => {
    if (indef(x)) return -1 
    else if (elem===x) return acc
    else return busca(xs,elem,acc+1)
}

/**
 * Criar uma função que encontre o maior valor 
 * numa lista de inteiros usando a recursividade.
 * Considere que a lista possui pelo menos um elemento.
 */
const maior = ([x,y,...xs]) => {
    if (indef(y)) return x
    else return (x>y)? maior([x,...xs]) : maior([y,...xs])
}

/**
 * Criar uma função que pega uma lista e devolve a soma de
 * todos os itens. Atenção: o item de uma lista pode ser outra lista.
 */
const somaAninhado = ([x,...xs]) => {
    if (indef(x)) return 0
    else if (!(x instanceof Array)) return x+somaAninhado(xs)
    else return somaAninhado(x)+somaAninhado(xs)
}

/**
 * Função para retornar o número de vogais numa string. 
 * Considere que todas as letras estão minúsculas.
 */
const vogais = (str) => {
    const helper = ([x,...xs]) => {
        if (indef(x)) return 0
        //testa se alguma das letras a,e,i,o,u existe em (corresponde a) x
        else if (/[aeiou]/.test(x)) return 1+helper(xs)
        else return helper(xs)
    }
    if (str==='') return 0
    else return helper(str.split(''))
}

/**
 * Criar uma função que transforma frases terminadas com múltiplos pontos 
 * de interrogação ? ou pontos de exclamação ! numa frase que termina apenas 
 * com um, sem alterar a pontuação no meio das frases. 
 * Ex: semgritaria("O que é isso?????") ---> "O que é isso?"
 */
const eliminaIntExc = (str) => {
    const helper = ([x,y,...xs]) => {
        if (x !== y) return [x,y,...xs]
        else if (/[?!]/.test(x)) return helper([y,...xs])
        else return [x,y,...xs]
    }
    if (str.length <= 2) return str
    const strinvertida = inverte(str)
    if (!(/[!?]/.test(strinvertida[1]))) return str
    else {
        const strlista = strinvertida.split('')
        return inverte(helper(strlista).join(''))
    }
}


// module.exports = {
//     busca,
//     maior,
//     somaAninhado,
//     vogais,
//     eliminaIntExc,
// }