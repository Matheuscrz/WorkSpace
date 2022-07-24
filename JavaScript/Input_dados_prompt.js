//Exemplo area de uma elipse. OBS: Só funciona no jsFiddle.
const areaEli = (x, y, pi = 3.14) => pi*x*y
const r1 = parseFloat(prompt('Raio 1 da elipse?'))
const r2 = parseFloat(prompt('Raio 2 da elipse?'))
const result = areaEli(r1, r2)
alert(`Área da elipse é ${result}!`)
