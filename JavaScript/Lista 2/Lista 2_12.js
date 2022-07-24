function fsegundog(a,b,c,resultado){
    const x1 = (-b+resultado)/(2*a)
    const x2 = (-b-resultado)/(2*a)
    const print = `Os valores de x1 e x2 são respectivamente:${x1},${x2}`
    return console.log(print)
}
const delta = (a,b,c) => ((b**2)-4*a*c)
const a = 2
const b = 5
const c = 8
resultado = delta(a,b,c)
entradaf = fsegundog(a,b,c,resultado)
