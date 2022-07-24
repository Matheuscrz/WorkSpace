/*Programa para exibir o número de dias de um determinado mês do ano. Sua função recebe o
nome do mês (ex: "fevereiro") e retorna o número de dias total (ex: 28, não precisa considerar
anos bissextos).*/
const ndias = (mes) => {
    if (mes == "fevereiro")
    return 28
    else if (mes == "abril" || mes == "junho" || mes == "setembro" || mes == "novembro") return 30
    else return 31
    
    }
    console.log(ndias("janeiro"))
    console.log(ndias("fevereiro"))
    console.log(ndias("março"))
    console.log(ndias("abril"))
    console.log(ndias("maio"))
    console.log(ndias("junho"))
    console.log(ndias("julho"))
    console.log(ndias("agosto"))
    console.log(ndias("setembro"))
    console.log(ndias("outubro"))
    console.log(ndias("novembro"))
    console.log(ndias("dezembro"))