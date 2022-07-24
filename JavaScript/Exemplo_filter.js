// const menorQue = (limite) => (lista) => lista.filter((x)=>x<limite)
// const menorQue15 = menorQue(15)
// const listaProdutosR$ = [10.60,8.50,5.55,6.40,41.00,23.05,19.90,15.90,22.10,2.75]
// const resultado = menorQue15(listaProdutosR$)
// console.log(resultado)

const nomes = ['Felipe','Ana', 'Bia', 'Adele', 'Gui', 'Adam', 'Rafa', 'Maria']
const filtroLetra = (letra) => (texto) => texto[0] == letra
const primeiraLetraA = filtroLetra('A')
console.log(nomes.filter(primeiraLetraA))
const tamanhoMaiorQue = (n) => (texto) => texto.length > n
const tamanhoMaiorQue4 = tamanhoMaiorQue(4)
console.log(nomes.filter(tamanhoMaiorQue4))