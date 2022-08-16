/**
 * Crie uma função que pega um número inteiro positivo na base 10 
 * e o converte para uma outra base passada como argumento:
 * base 2, base 8, ou base 16. A função deve retornar a string 
 * representativa do número nessa nova base.
 */
const decPara = (base) => (n) => {
    const baseReg = {2:'01',8:'01234567',16:'0123456789abcdef'}
    if (n<base) return baseReg[base][n]
    else {
        const quo = Math.floor(n/base)
        const resto = n%base
        return decPara(base)(quo)+`${baseReg[base][resto]}`
    }
}
const decPara2 = decPara(2)
const decPara8 = decPara(8)
const decPara16 = decPara(16)

//testar com outros valores
const val = 26
console.log(decPara2(val))
console.log(decPara8(val))
console.log(decPara16(val))