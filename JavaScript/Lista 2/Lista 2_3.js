function verification (a,b,c){
    if ((a+b)>c){
        return console.log("Forma um triângulo.")
    }
    else if ((a+c)>b){
        return console.log("Forma um triângulo")
    }
    else if ((b+c)>a){
        return console.log("Forma um triângulo")
    }
    else return console.log("Eles não formam um triângulo")
}
const a = 16
const b = 20 
const c = 30
const dados = verification(a,b,c)