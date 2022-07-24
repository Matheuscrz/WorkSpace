const indef = x => typeof x == 'undefined'
/**
 * 
 * QUESTÃO 4 [valor: 2pts]
 * Implemente a função `geraSigla` para gerar a sigla de uma string passada como 
 * argumento. Considere que a sigla é formada simplesmente pela junção das letras 
 * maiúsculas existentes na string de entrada. 
 * Para EXEMPLOS, ver casos de teste ao final do arquivo.
 * [PERMISSÕES: além de todos os operadores da linguagem, caso ache necessário, você 
 * pode usar a função `slice` (de String), a função `test` (para uso em conjunto com Regex,
 * semelhante ao usado em alguns exemplos e exercícios) e a função `indef` (definida na 
 * disciplina e amplamente utilizada nos exemplos e exercícios ao longo do curso).] 
 * 
 */
const geraSigla = (str) => {
    if (indef(str)) return ''
    else array = str.split('')
    const converteEmLista = ([x,...xs]) => {
        if (x == ' ') return converteEmLista(xs)
        else return concat(x.charCodeAt(0))
    }
    const Verifica = ([x,...xs]) => {
        if (x > 64 && x < 91) push(x)
        else return Verifica(xs)
    }
    return Verifica(converteEmLista(array))
}
console.log(geraSigla('Organização Mundial da Saúde'))
    //verifica se cada valor e maiuscula - converte em ascii [65,90] maiuscula
    //se for maiuscula, adiciona ao retorno  

//"Organização Mundial de Saúde" apenas maiúsculas, portanto 'OMS'
// const log = (str) => console.log(str)
// const filterFirst = (p) => ([x,...xs]) => {
// if (indef(x)) return []
// else return (p(x)) ? xs : filterFirst(p)(xs)
// }
// const filterFirstNeg = filterFirst((x)=>x<0)