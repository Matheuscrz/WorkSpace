//Usei o switch al invés de vários 'ifs' apenas
//para mostrar novas possibilidades da linguagem.
function extenso(n) {
    switch (n) {
        case 0: return 'ZERO'; break;
        case 1: return 'UM'; break;
        case 2: return 'DOIS'; break;
        case 3: return 'TRÊS'; break;
        case 4: return 'QUATRO'; break;
        case 5: return 'CINCO'; break;
        case 6: return 'SEIS'; break;
        case 7: return 'SETE'; break;
        case 8: return 'OITO'; break;
        case 9: return 'NOVE'; break;
        default: return 'NÃO é um algarismo'
    }
}

const alg1 = 7
const alg2 = '13'

console.log(`${alg1} por extenso: ${extenso(alg1)}.`)
console.log(`${alg2} por extenso: ${extenso(alg2)}.`)