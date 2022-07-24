// Retorne os n primeiros algarismos de um número inteiro qualquer 

const { log } = require('./utils.js')

const nalgarismos = (n) => (num) => {
    const strnum = BigInt(num).toString()
    return strnum.slice(0,n)
}
const num1 = 456723901
const num2 = 237492834787524781241857183574742344232352351251235123512361463423749
const num3 = 887939857918482746123874515798233246234623462346234634623462346123749n
log(nalgarismos(5)(num1))
log(nalgarismos(8)(num2))
log(nalgarismos(15)(num3))