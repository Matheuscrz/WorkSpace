/*Procure na Internet sobre os critérios que definem um ano como sendo bissexto e crie um
programa para isso. Para cada ano testado, o programa deve exibir true (se for bissexto) ou
false (se não for bissexto). Teste com os anos .*/
const bissexto = (ano) => {
    const resto4 = ano % 4 == 0
    const resto100 = ano % 100 == 0
    const resto400 = ano % 400 == 0
    return resto100 ? resto400 : resto4
    }
    console.log(bissexto(2016))
    console.log(bissexto(2000))
    console.log(bissexto(1700))
    console.log(bissexto(1800))
    console.log(bissexto(100))