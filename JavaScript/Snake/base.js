//Funções de apoio
const somalist =  n => n+1 // Criamos essa função para adicionar um numero ao contador
const adjust    = n => f => xs => mapi(x => i => i == n ? f(x) : x)(xs) //Função de ajuste, recebe um numero(que será o índice) uma função e uma lista,a função só sera aplicada a o elemento do índice passado.(essa função poderia ser escrita de forma pura, definindo a função mapi dentro dela msm, nesse caso ela puxando mapi de fora.)
const dropFirst = xs => xs.slice(1) //Função de remoção do primeiro item de uma lista, utilizando o slice(1) definido que ignore o primeiro elemento da lista e pegue do segundo ao ultimo
const dropLast  = xs => xs.slice(0, xs.length - 1) //Função de remoção do ultimo item de uma lista, utilizando o length definindo que a lista seria do índice 0 ate o penúltimo elemento
const id        = x => x //Função identidade
//As funções a seguir são usadas para implementar o principio de currying.
const k         = x => y => x //Função de chave
const map       = f => xs => xs.map(f) //Recebe uma Função e uma lista, e executa o  mapeamento da Função em cada elemento da lista
const mapi      = f => xs => xs.map((x, i) => f(x)(i)) //Função de mapeamento, que aplica uma função a cada elemento usando o índice de um elemento da lista
const merge     = o1 => o2 => Object.assign({}, o1, o2) //Função de combinação, combina de um dicionario para outro.
const mod       = x => y => ((y % x) + x) % x //Função de módulo, recebe dois x e y e tira o resto entre os dois e soma x e depois tira o resto com o x
const objOf     = k => v => ({ [k]: v }) //Essa função cria um dicionario com uma chave e um valor passado
const pipe      = (...fns) => x => [...fns].reduce((acc, f) => f(acc), x) //Função de pipe, recebe varias funções e junta em uma só(utiliza do método função de alta ordem, puxando n parâmetro(funções neste caso))
//Fim
const prop      = k => o => o[k] //Essa função de recebe uma chave e o dicionario
const range     = n => m => Array.apply(null, Array(m - n)).map((_, i) => n + i) //Função de geração de intervalo de n a m, por exemplo de 1 a 10
const rep       = c => n => map(k(c))(range(0)(n)) //Função cria uma  repetição de um elemento c passado n vezes exemplo: c = '.' e n = 3 retorna = '...' 
const rnd       = min => max => Math.floor(Math.random() * max) + min //Função de aleatoriedade, vai gerar um recebe um numero mínimo e máximo, e o Math.random() gera um numero aleatório no intervalo de 0 a 1. em seguida ele multiplica pelo  numero passado máximo e soma o resultado com o numero passado mínimo 
const spec      = o => x => Object.keys(o) //Recebe um dicionario e um valor, retorna uma matriz de keys
  .map(k => objOf(k)(o[k](x))) //Aplica a chave o[k] a x 
  .reduce((acc, o) => Object.assign(acc, o)) //..

module.exports = { somalist,adjust, dropFirst, dropLast, id, k, map, merge, mod, objOf, pipe, prop, range, rep, rnd, spec } //Exportação de todas funções auxiliares
