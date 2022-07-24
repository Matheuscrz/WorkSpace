//Função que elimina da lista original todos os elementos que NÃO são numéricos.
const func = (lista) => lista.filter(n => typeof n === 'number')
console.log(func([1, 2, "aasf", 3.111111111, "1", "123", 123, -8]))