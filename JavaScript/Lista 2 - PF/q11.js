function fmedia(x, y, z) { 
    return (x+y+z)/3
}

function fmaior(x, m) {
    if (x>m) return 1
    else return 0
}

const a = 3
const b = 7 
const c = 9 

//A estratégia aqui foi criar uma função que retorna 1
//se um valor for maior que média. Dessa forma, evita-se 
//vários "ifs".
const media = fmedia(a,b,c)
const total = fmaior(a,media) + fmaior(b,media) + fmaior(c,media)

//O caracter '\n' representa 'quebra de linha'. Com isso, 
//conseguimos colocar quebra de linhas dentro do texto de saída.
console.log(`Quantos maiores que a média entre ${a}, ${b} e ${c}?\nResp: ${total}`)