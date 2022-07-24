const indef = x => typeof x == 'undefined'
/**
 * 
 * QUESTÃO 2 [valor: 2pts]
 * Implemente a função `casosAcumulados` que pega uma lista de ocorrência de casos diários
 * de uma determinada doença observados numa população e retorna uma lista com o acúmulo
 * desses casos dia a dia; ou seja, cada posição dessa lista representa o somatório de casos
 * até aquele dia. 
 * Para EXEMPLOS, ver casos de teste ao final do arquivo.
 * [PERMISSÕES: além de todos os operadores da linguagem, caso ache necessário, você 
 * pode usar a função `indef` (definida na disciplina e amplamente utilizada nos exemplos e 
 * exercícios ao longo do curso); nenhuma outra função pré-definida pode ser utilizada.] 
 * 
 */
const casosAcumulados = ([x, ...xs]) => {
    if (indef(x)) return 0
    else if (!(x instanceof Array)) return x + x[0]
    else return x[0] + casosAcumulados(xs)
}
const test = [1,2,3,4,5]
console.log(casosAcumulados(test))
