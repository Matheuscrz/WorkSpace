//O algoritmo de Euclides é baseado no princípio de que o MDC 
//não muda se o menor número for subtraído ao maior. 
//EXEMPLO:
//mdc(252)(105) ---> 21 
//Já que 252−105=147 então mdc(147)(105) ---> 21. 
//Como o maior dos dois números é reduzido, a repetição deste 
//processo irá gerar sucessivamente números menores, até convergir
//em zero. Nesse momento, o MDC é o outro número inteiro, 
//maior que zero. (Fonte: adaptado de Wikipedia)
const mdc = (n) => (m) => {
    if (n<m) return mdc(m)(n)
    else if (m==0) return n
    else return mdc(n-m)(m)
}
//testar com outros valores
const val1 = 12
const val2 = 8
console.log(`MDC ${val1},${val2} = ${mdc(val1)(val2)}`)

const mdc3 = (n) => (m) => (k) => mdc(k)(mdc(n)(m))

const val3 = 16
console.log(`MDC ${val1},${val2},${val3} = ${mdc3(val1)(val2)(val3)}`)