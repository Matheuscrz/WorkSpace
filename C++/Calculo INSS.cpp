#include <stdio.h>
#include <stdlib.h>
void main(){
    float salariobruto=0,INSS=0,salarioliquido=0;
    printf("Calculo imposto de renda\n");
    printf("Digite o salario bruto mensal: ");
    scanf("%f" , &salariobruto);
    if(salariobruto<=1693.72){
        INSS=((salariobruto*8)/100);
    }
    if(salariobruto>=1693.72 && salariobruto<=2822.90 ){
        INSS=((salariobruto*9)/100);
    }
    if(salariobruto>=2822.90){
        INSS=((salariobruto*11)/100);
    }
    salarioliquido=(salariobruto-INSS);
    printf("Salario liquido=%f",salarioliquido);
    printf("\nDesconto,INSS=%f",INSS);
    printf("\nSalario Bruto=%f",salariobruto);
}
