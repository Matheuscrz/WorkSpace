function verification (a,b,c){
    if (a == b && a == c){
        return console.log("Triângulo equilátero")
    }
    else if (a == b && a!== c){
        return console.log("Triângulo isósceles")
    }
    else if (b == c && b !=a){
        return console.log("Triângulo isósceles")
    }
    else if (a == c && a!= b){
        return console.log("Triângulo isósceles")
    }
    else if (a != b && a != c){
        return console.log("Triângulo escaleno")
    }
}
const a = 20
const b = 20 
const c = 20
const dados = verification(a,b,c) 