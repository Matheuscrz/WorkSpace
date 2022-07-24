#include <stdio.h>
#include <stdlib.h>
float cf (float f){
    f=f*1.8+32;
    return f;
}
int main(int argc, char *argv[]){
    float c,f;
    printf ("Digite a temperatura em Celsius\n");
    scanf ("%f",&c);
    printf ("%.2f Em fahrenheit sao%.2f:",c,cf(c));
    return 0;
}