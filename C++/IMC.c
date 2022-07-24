#include <stdio.h>
#include <stdlib.h>

void main()
{
  float peso,altura,IMC;
  printf("Entre com o peso(kg): ");
  scanf("%f",& peso);
  printf("A Entre com a altura(m): ");
  scanf("%f",& altura);
  IMC=(peso/(altura*altura));
  if (IMC<17){
    printf("Muito abaixo do peso,IMC = %.2f\n",IMC);
    }else if(IMC >=17 && IMC<18.49){
  printf("Abaixo do peso,IMC = %.2f\n",IMC);}
  else if (IMC >=18.5 && IMC<24.99){
  printf("Peso normal,IMC = %.2f\n",IMC);}
  else if (IMC >=25 && IMC<29.99){
  printf("Acima do peso,IMC = %.2f\n",IMC);}
  else if (IMC >=30 && IMC<34.99){
    printf("Obesidade 1,IMC = %.2f\n",IMC);}
  else if (IMC >=35 && IMC<39.99){
    printf("Obesidade 2(severa),IMC = %.2f\n",IMC);}
    else if (IMC >=40){
        printf("Obesidade 3 (mórbida),IMC = %.2f\n",IMC);
    }
}
