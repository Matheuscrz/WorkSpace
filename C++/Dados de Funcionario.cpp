#include <stdio.h>
#include <stdlib.h>

struct funcionario {
    int matricula;
    char nome[15];
    char sobrenome[15];
    char telefone[15];
    char email[45];
    char data[10];
    float salariobruto;
    float inss;
    float salarioliquido;
};
int main(){
    struct funcionario fun;
    FILE*arquivo;
    arquivo=fopen("salario.txt","a+");
    printf("Cadastro de funcionario\n");
    printf("Entre com a matricula:");
    scanf("%i",&fun.matricula);
    fprintf(arquivo,"%s %i\n","Matricula:",fun.matricula);
    printf("Entre com o nome:");
    scanf("%s",&fun.nome);
    fprintf(arquivo,"%s %s\n","Nome:",fun.nome);
    printf("Entre com o sobrenome:");
    scanf("%s",&fun.sobrenome);
    fprintf(arquivo,"%s %s\n","Sobrenome:",fun.sobrenome);
    printf("Entre com o telefone:");
    scanf("%i",&fun.telefone);
    fprintf(arquivo,"%s %i\n","Telefone:",fun.telefone);
    printf("Entre com email:");
    scanf("%s",&fun.email);
    fprintf(arquivo,"%s %s\n","Email:",fun.email);
    printf("Entre com a Data de Nascimento:");
    scanf("%i",&fun.data);
    fprintf(arquivo,"%s %i\n","Data de Nascimento:",fun.data);
    printf("Entre com o salario Bruto:");
    scanf("%f",&fun.salariobruto);
    fprintf(arquivo,"%s %f\n","Salario Bruto:",fun.salariobruto);
    printf("Entre com o INSS:");
    scanf("%f",&fun.inss);
    fprintf(arquivo,"%s %f\n","INSS:",fun.inss);
    printf("Entre com o Salario Liquido:");
    scanf("%f",&fun.salarioliquido);
    fprintf(arquivo,"%s %f\n","Salario Liquido:",fun.salarioliquido);
    fclose(arquivo);
    return 0;
}

