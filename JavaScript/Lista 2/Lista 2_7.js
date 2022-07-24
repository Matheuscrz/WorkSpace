function fmenor(x, y, z) { 
    if (x<=y && (y<=z || y>=z))
        return x
        else if (x>=y && y<=z)
            return y
            else if (x>=y && y>=z)
                return z
}
const a = 5
const b = 8
const c = 9

const resultado = fmenor(a,b,c)  

console.log(resultado)