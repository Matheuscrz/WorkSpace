/**
 * Criar uma função recursiva que pega dois parâmetros e repete a string n vezes. 
 * O primeiro parâmetro txt é a string a ser repetida e o segundo parâmetro é o número de vezes 
 * que a string deve ser repetida.
 */
 const repita = (txt,n) => 
 (n===0) ? "" : txt+repita(txt,n-1)
console.log(repita('hua',15))