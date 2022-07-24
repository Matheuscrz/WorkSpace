// const desconto = (desc) => (lista) => lista.map((x)=>x-x*(desc)/100)
// const desconto10 = desconto(10)
// const listaProdutosR$ = [10.60,8.50,5.55,6.40,41.00,23.05,19.90,15.90,22.10,2.75]
// const resultado = desconto10(listaProdutosR$)
// console.log(resultado)



// const valores = [3,4,-2,0,1,40]
// const triplo = valores.map((x) => 3*x)
// console.log(triplo)


// const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
// const primeiraLetra = (texto) => texto[0]
// const iniciais = nomes.map(primeiraLetra)
// console.log(iniciais)

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const addSobrenome = (sobrenome) => (nome) => `${nome} ${sobrenome}`
const nomeCompleto = nomes.map(addSobrenome("Costa"))
console.log(nomeCompleto) 