//O último parâmetro serve para indicar qual a raiz 
//desejada naquele cálculo: + ou -
function fraiz(a,b,c,r) { 
    const delta = b**2 - 4*a*c
    if (r>0) return ((-1)*b + Math.sqrt(delta))/(2*a)
    else return ((-1)*b - Math.sqrt(delta))/(2*a)
}

//Esses valores abaixam representam a equação -2x² +x +3 = 0
//Você pode altera-los para fazer outros testes, mas lembre
//que pode acontecer de não existir raízes reais. Nesse caso,
//será impresso algo como NaN (significa Not a Number).
const a = -2
const b = 1 
const c = 3

//Último argumento serve apenas para indicar qual a raiz desejada
//entre as duas possíveis.
const raiz1 = fraiz(a,b,c,-1)
const raiz2 = fraiz(a,b,c,1)

console.log(`As raízes da equação são: ${raiz1} e ${raiz2}.`)