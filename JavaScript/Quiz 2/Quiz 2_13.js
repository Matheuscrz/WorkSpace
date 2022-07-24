//O que será exibido como resultado do programa a seguir?
const p = (ref) => (lista) => (x) => lista.indexOf(x) == (lista.length + ref)
const filtro = (lista) => lista.filter(p(-1)(lista))
const exemplo = ['Um','Dois','Três','Quatro']
console.log(filtro(exemplo))