const indef = x => typeof x == 'undefined'
/**
 * 
 * QUESTÃO 3 [valor: 2pts]
 * Implemente a função `intercalaOrdenado` que une duas listas ordenadas em uma única que 
 * também deve se manter ordenada. Assuma que as duas listas passadas já estão ordenadas, 
 * mas qualquer uma delas pode também ser vazia. 
 * Para EXEMPLOS, ver casos de teste ao final do arquivo.
 * [PERMISSÕES: além de todos os operadores da linguagem, caso ache necessário, você 
 * pode usar a função `indef` (definida na disciplina e amplamente utilizada nos exemplos e 
 * exercícios ao longo do curso); nenhuma outra função pré-definida pode ser utilizada.]
 * 
 */
const intercalaOrdenado = ([x,...xs]) => ([y,...ys]) => {
    if (indef(x)) return [y,...ys]
    else if (indef(y)) return [x,...xs]
    else return [x,y,...intercalaOrdenado(xs)(ys)]
    const ordenar = ([x,...xs]) => {
        if (indef(x)) return []
        else if (x < xs[0]) return ordenar([x,...xs])
        else return [x,...ordenar(xs)]
    }
}
console.log(intercalaOrdenado([-5,0,4,8,15],[0,0,8,15,15]))

//([-5,0,4,8,15])([0,0,8,15,15]),[-5,0,0,0,4,8,8,15,15,15],
//deve retornar [-5,0,0,0,4,8,8,15,15,15]
