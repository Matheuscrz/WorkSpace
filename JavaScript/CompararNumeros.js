function comparar(x, y){
    if (x == y){
        return "Os números " + x +" é " + y +" são iguais.";
    }
    else return "Os números " + x +" é " + y +" não são iguais.";
}
function verifica(x, y){
    const soma = x + y;
    if (soma > 10 && soma < 20){
        return "Sua soma é " +soma +",que é maior que 10 e menor que 20.";
    }
    else if(soma == 10 && soma != 20){
        return "Sua soma é " +soma +",que é igual a 10 e diferente de 20.";
    }
    else if(soma == 20 && soma != 10){
        return "Sua soma é " +soma +",que é igual a 20 e diferente de 10.";
    }
    else if (soma > 10 && soma >20){
        return "Sua soma é " +soma +",que é maior que 10 e maior que 20.";
    }
    else return "Sua soma é " +soma +",que é menor que 10 e menor que 20.";
}
function concatena(x, y){
    console.log(comparar(x, y)+verifica(x, y));
}
concatena(5, 5);
