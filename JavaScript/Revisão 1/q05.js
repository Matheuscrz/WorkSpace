// Retorne o número total de letras usadas na escrita por extenso
// em inglês dos números cardinais presentes numa sequência de 
// valor máximo 1000 (one thousand).

const { log } = require('./utils.js')

const extenso = (num) => {
    switch (num) {
        case 1: return 'one'
        case 2: return 'two'
        case 3: return 'three'
        case 4: return 'four'
        case 5: return 'five'
        case 6: return 'six'
        case 7: return 'seven'
        case 8: return 'eight'
        case 9: return 'nine'
        case 10: return 'ten'
        case 11: return 'eleven'
        case 12: return 'twelve'
        case 13: return 'thirteen'
        case 14: return 'fourteen'
        case 15: return 'fifteen'
        case 16: return 'sixteen'
        case 17: return 'seventeen'
        case 18: return 'eighteen'
        case 19: return 'nineteen'
        case 20: return 'twenty'
        case 30: return 'thirty'
        case 40: return 'fourty'
        case 50: return 'fifty'
        case 60: return 'sixty'
        case 70: return 'seventy'
        case 80: return 'eighty'
        case 90: return 'ninety'
        case 100: return 'one hundred'
        case 1000: return 'one thousand'
        default: return tratar(num)
    }
} 

const tratar = (num) => {
    const numstr = num.toString()
    const len = numstr.length
    if (len == 2) {
        const unidade = numstr[1]
        const dezena = numstr[0]+'0'
        const final = `${extenso(parseInt(dezena))} ${extenso(parseInt(unidade))}`
        return final
    } else if (len == 3) {
        const dezena = numstr.substring(1,3)
        const centena = numstr[0]
        if (parseInt(dezena) < 20) {
            return `${extenso(parseInt(centena))} hundred ${extenso(parseInt(dezena))}`
        } else {
            const unidade = numstr[2]
            const dezena = numstr[1]+'0'
            return `${extenso(parseInt(centena))} hundred ${extenso(parseInt(dezena))} ${extenso(parseInt(unidade))}`
        }        
    }
}

const nletras = (str) => {
    const strfiltro = str.split(' ').filter((x)=>x!==' ')
    log(strfiltro)
    return strfiltro.length
}

const extensostr = extenso(999)
log(extensostr)
log(nletras(extensostr))