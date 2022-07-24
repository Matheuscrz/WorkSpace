#include <stdio.h>
#include <stdlib.h>

void soma(int a,int b)
{
    int r;
    r=a+b;
    printf("\nA soma de A+B e %i", r);
}
void subtracao(int a,int b){
    int r;
    r=a-b;
    printf("\nA soma de A-B e %i", r);
}
void mutiplicacao(int a,int b){
    int r;
    r=a*b;
    printf("\nA soma de A*B e %i", r);
}
void divisao(int a,int b){
    float r;
    r=(float)a/b;
    printf("\nA soma de A/B e %f", r);
}
void main()
{
    int x,y;
    printf("\nEntre com o valor de A:");
    scanf("%i", &x);
    printf("\nEntre com o valor de B:");
    scanf("%i", &y);
    printf("Calculadora\n");
    soma(x,y);
    subtracao(x,y);
    mutiplicacao(x,y);
    divisao(x,y);
}
