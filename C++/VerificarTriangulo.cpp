#include <stdio.h>
#include <stdlib.h>
void main()
{
    float ladoA,ladoB,ladoC;
    float lado[3];
    printf("Entre com o ladoA");
    scanf("%f",&ladoA);
     printf("Entre com o ladoB");
    scanf("%f",&ladoB);
     printf("Entre com o ladoC");
    scanf("%f",&ladoC);
    if(ladoA == ladoB){
            if(ladoA == ladoC){ 
                printf("\nA Triangulo equilátero ");
                }
        }
        else if(ladoA == ladoB || ladoB == ladoC || ladoC == ladoA){
                printf("\nA Triangulo isosceles");
        }
        else {
                printf("\nA Triangulo escaleno");
        }
}
