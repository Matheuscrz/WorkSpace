/*Programa para capturar a data de hoje do sistema e exibir no seguinte formato: dd/mm/yyyy .
No código abaixo, o objeto Date() representa a data do dia atual, enquanto as funções
pertencentes ao objeto resgatam respectivamente: o dia, o mês e o ano. */
const data = new Date()
const dia = data.getDate()
const mes = data.getMonth()+1
const ano = data.getFullYear()
const hora = data.getHours()
const minute = data.getMinutes()
const dd = dia < 10? '0'+dia : dia
const mm = mes < 10? '0'+mes : mes
const yyyy = ano
const hoje = `${dd}/${mm}/${yyyy}`
const tempo = `${hora}:${minute}`
console.log(hoje,tempo)