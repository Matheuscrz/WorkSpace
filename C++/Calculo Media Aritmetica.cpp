Código e apresentação
#include <stdio.h>
#include <stdlib.h>

void main()
{
printf("Sistema de calculo de notas\n");
float notas[5];
printf("Entre com a 1. nota: ");
scanf("%f", &notas[0]);
printf("Entre com a 2. nota: ");
scanf("%f", &notas[1]);
printf("Entre com a 3. nota: ");
scanf("%f", &notas[2]);
printf("Entre com a 4. nota: ");
scanf("%f", &notas[3]);
notas[4] = (((notas[0]+notas[1])*4)+
((notas[2]+notas[3])*6))/10;
printf("A sua media final e: %f", notas[4]);

}
#include <stdio.h>
#include <stdlib.h>

void main()
{
float notas[5];
int c;
printf("Sistema de Notas\n");

for(c=0;c<4;c++){
printf("Entre com a %i. nota:\t", c+1);
scanf("%f", &notas[c]);
}
notas[4]=(((notas[0]+notas[1])*4)+
((notas[2]+notas[3])*6))/10;
printf("\nA media do aluno e:\t %f", notas[4]);
if(notas[4]>=6){
printf("\nAluno aprovado");
}
}
#include <stdio.h>
#include <stdlib.h>
void main()
{
float notas[6][5];
int c,li;
printf("Sistema de Notas\n");
for(li=0;li<6; li++){
for(c=0;c<4;c++){
printf("Entre com a %i. nota: ", c+1);
scanf("%f", &notas[li][c]);
}
notas[li][4]=(((notas[li][0]+notas[li][1])*4)+
((notas[li][2]+notas[li][3])*6))/10;
}
for(li=0;li<6; li++){
printf("\nA média do aluno %i e: %f \n", 
li, notas[li][4]);
}
}