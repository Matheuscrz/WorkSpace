const indef = x => typeof x == 'undefined'

/**
 * 
 * QUESTÃO 1 [valor: 2pts]
 * Implemente a função `qtdeDigitosDiferentesDe` que deve retornar a qtde de dígitos 
 * que um dado número inteiro positivo `num` possui e que são diferentes de um 
 * algarismo `alg` específico também fornecido; caso `alg` não seja fornecido, então 
 * todos os dígitos do número devem ser contabilizados. 
 * Para EXEMPLOS, ver casos de teste ao final do arquivo.
 * [PERMISSÕES: além de todos os operadores da linguagem, caso ache necessário, você 
 * pode usar a função `Math.floor` (pré-definida na linguagem) e a função `indef` 
 * (definida na disciplina e amplamente utilizada nos exemplos e exercícios ao longo
 * do curso)] 
 * 
 */
const qtdeDigitosDiferentesDe = (str) => (str) => { 
const converteEmLista = (str) => {
    if (str.length == 0) return []
    else return [str[0], ...converteEmLista(str.slice(1))]    
}
const compara = ([x, ...xs]) => {
    if (x != xs[0]) return 1 + compara(xs)
    else if ( x == xs[0]) return 1 + compara(xs)
    else return 0
}
}
const valor1 = 123
const valor2 = 9998762
const valor3 = 9
console.log(qtdeDigitosDiferentesDe(valor2, valor3))
