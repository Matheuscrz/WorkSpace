#include <stdio.h>
#include <stdlib.h>
void main(){
    int A,B,AUX,I,N;
    A=0;
    B=1;
    printf("Qual o tamanho da sequencia fibonacci desejada?");
    scanf("%i",&N);
    printf("%i\t",B);
    for(I=0;I<=N-2;I++){
        AUX=A+B;
        A=B;
        B=AUX;
        printf("%i\t",B);
    }
}


