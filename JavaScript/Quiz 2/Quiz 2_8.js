//Função que retorna a lista contendo todos os valores pares que estavam numa posição também par
const func = (lista) => lista.filter((item,indice) => !(item % 2) && !(indice % 2))
console.log(func([1,3,2,6,4,8]))