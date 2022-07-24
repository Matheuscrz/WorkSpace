#include <stdio.h>
#include <stdlib.h>

struct imc{
    float peso;
    float altura;
    float imctotal;
};
void salvar(struct imc meuimc){
    FILE *arquivo;
arquivo = fopen("imc.txt","a");
fprintf(arquivo, "%s %f \n","Peso:%s\n",meuimc.peso);
fprintf(arquivo, "%s %f \n","Altura:%s\n",meuimc.altura);
fprintf(arquivo, "%s %f \n","IMC:%s\n",meuimc.imctotal);
fclose(arquivo);
}
void exibir(){
FILE *arquivo;
arquivo = fopen("imc.txt","a");
char linha[80];
while(fgets(linha,80,arquivo)!=NULL){
        printf("%s\n",linha);

}
fclose(arquivo);
}
void main(){
struct imc meuimc;
printf("Calculo de IMC\n");
printf("Entre com seu peso: ");
scanf("%f",&meuimc.peso);
printf("\nEntre com sua altura: ");
scanf("%f",&meuimc.altura);
meuimc.imctotal= meuimc.peso/(meuimc.altura*meuimc.altura);
salvar(meuimc);
printf("\nDados salvos\n");
exibir();
}

