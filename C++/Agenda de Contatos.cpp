#include <stdio.h>
#include <stdlib.h>

struct agenda{
    char nome[50];
    char fone[13];
    char celular[13];
    char email[200];
};
void salvar(struct agenda agendas){
    FILE *arquivo;
    arquivo = fopen("agenda.txt","a");
    fprintf(arquivo, "%s %s \n","Nome:%s\n",agendas.nome);
    fprintf(arquivo, "%s %s \n","Fone:%s\n",agendas.fone);
    fprintf(arquivo, "%s %s \n","Celular:%s\n",agendas.celular);
    fprintf(arquivo, "%s %s \n","Email:%s\n",agendas.email);
    fclose(arquivo);
}
void main(){
    struct agenda contato[5];
    int i,opc;
    for(i=0;i<=4;i++){
        printf("Cadastro de dados da Agenda\n");
        printf("Entre com o nome: ");
        scanf("%s",&contato[i].nome);
        printf("\nEntre com o fone: ");
        scanf("%s",&contato[i].fone);
        printf("\nEntre com o celular: ");
        scanf("%s",&contato[i].celular);
        printf("\nEntre com o email: ");
        scanf("%s",&contato[i].email);
        printf("\n\n");
        printf("Nome:%s\n",contato[i].nome);
        printf("Fone:%s\n",contato[i].fone);
        printf("Celular:%s\n",contato[i].celular);
        printf("Email:%s\n",contato[i].email);
        printf("Deseja salvar? 1=sim, 2=nao");
        scanf("%i",&opc);
    if(opc==1){
        salvar(contato[i]);
        printf("\nContato salvo\n");
    }
    else{
        printf("\nContato nao foi salvo\n");}
    }
}
