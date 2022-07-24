#include <stdio.h>
#include <stdlib.h>
void main(){
int contador,total=10,I;
for(contador=1;contador<=10;contador++){
    printf("\n");
    for(I=1;I<=total;I++){
        printf("*");
    }
    total--;
}
printf("\n");
total=2;
for(contador=1;contador<=10;contador++){
    for(I=1;I<=total;I++){
            printf("*");
    }
    printf("\n");
        total++;
}

}