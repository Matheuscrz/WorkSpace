/*Programa para calcular a área de um triângulo de lados l1, l2, l3 (teste com os valores , e ).
Dica: raiz quadrada em JS pode ser calculada pela função Math.sqrt(...) .*/
const l1 = 3;
const l2 = 4;
const l3 = 5;
const s = (l1 + l2 + l3)/2
const area = Math.sqrt(s*((s-l1)*(s-l2)*(s-l3)))
console.log(area)