function menor(x, y) { 
    if (x<y) return x
    else return y
}

const a = -3
const b = 0 
const c = 9

//Observe que não é necessário criar uma função
//para comparar três valores. Basta reaproveitar
//a função de comparação entre dois valores quantas
//vezes desejar para comparar muitos valores e descobrir
//o menor.
const resultado = menor(a,menor(b,c))  

console.log(resultado)