const xor = (x,y) => (x || y) && !(x && y)

const v1 = false 
const v2 = true 

console.log(xor(v1,v2))