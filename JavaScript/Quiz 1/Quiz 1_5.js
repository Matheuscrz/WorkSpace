/*Função para testar se uma dada operação aritmética básica (soma, subtração, multiplicação ou
divisão) passada como argumento casa com os valores envolvidos na expressão:
<valor1> <op> <valor2> = <valor3> . Se isso for verdade, a função deve retornar o nome da
função que "deu match", caso contrário, deve retornar a string "falha". Dica: em JS,
nomefunc.nome retorna o nome da função.
No código a seguir, serão exibidos respectivamente: "soma" , "mult" , "sub" , "div" ,
"falha" */
function testaOp(op, x, y, z) {
    if (op(x,y) == z) return op.name
    else return 'falha'
    }
    const soma = (a, b) => a + b
    const mult = (a, b) => a * b
    const sub = (a, b) => a - b
    const div = (a, b) => a / b
    console.log(testaOp(soma, 10, 25, 35))
    console.log(testaOp(mult, 10, 25, 250))
    console.log(testaOp(sub, 30, 25, 5))
    console.log(testaOp(div, 100, 25, 4.0))
    console.log(testaOp(div, 100, 25, 25))