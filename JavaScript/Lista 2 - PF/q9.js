function xor (x,y) {
    return (x || y) && !(x && y)
}

const v1 = false 
const v2 = true 

console.log(`${v1} ⊗ ${v2} = ${xor(v1,v2)}.`)