//O que será exibido como resultado do programa a seguir?
const compoe = (...fns) => (lista) => fns.reduce((acc,fn) => fn(acc), lista)
const f = (lista) => lista.sort((a,b) => a-b)
const g = (lista) => lista.map((x) => -x)
const fg = compoe(f,g)
const lista1 = [1,2,3,4]
console.log(fg(lista1))