//Incompleto - Concertar


// #include <stdio.h>
// #include <stdlib.h>
// #include <string.h>
// struct alunos{
//     int matricula;
//     char nome[15];
//     char sobrenome[15];
//     float me1;
//     float prova1;
//     float me2;
//     float prova2;
//     float media;
//     char resultado[20];
// };
// void visualizar(){
//     FILE *arquivo;
//     arquivo = fopen("notasalunos.txt", "r");
//     char linha[80];
//     while(fgets(linha, 80, arquivo)!=NULL){
//     printf("%s\n", linha);
//     }
//     fclose(arquivo);
// }
// void salvar(struct alunos alu){
//     FILE*arquivo;
//     arquivo=fopen("notasalunos.txt","a+");
//     fprintf(arquivo,"%s %i\n","Matricula:",alu.matricula);
//     fprintf(arquivo,"%s %s\n","Nome:",alu.nome);
//     fprintf(arquivo,"%s %s\n","Sobrenome:",alu.sobrenome);
//     fprintf(arquivo,"%s %f\n","1ME:",alu.me1);
//     fprintf(arquivo,"%s %f\n","1Prova:",alu.prova1);
//     fprintf(arquivo,"%s %f\n","2ME:",alu.me2);
//     fprintf(arquivo,"%s %f\n","2Prova:",alu.prova2);
//     fprintf(arquivo,"%s %f\n","Media:",alu.media);
//     fprintf(arquivo,"%s %s\n","Resultado:",alu.resultado);
//     fclose(arquivo);
// }
//     void main(){
//         struct alunos alu[1];
//         int i,opc;
//         for(i=0;i<1;i++){
//         printf("\nSistema de Notas\n");
//         printf("Digite a matricula do aluno:");
//         scanf("%i",&alu[i].matricula);
//         printf("Digite o nome do aluno:");
//         scanf("%s",&alu[i].nome);
//         printf("Digite o sobrenome do aluno:");
//         scanf("%s",&alu[i].sobrenome);
//         printf("Entre com a nota da 1 ME:");
//         scanf("%f",&alu[i].me1);
//         printf("Entre com a nota da 1 prova:");
//         scanf("%f",&alu[i].prova1);
//         printf("Entre com a nota da 2 ME:");
//         scanf("%f",&alu[i].me2);
//         printf("Entre com a nota da 2 prova:");
//         scanf("%f",&alu[i].prova2);
//         alu[i].media=(((alu[i].me1+alu[i].prova1)*4)+((alu[i].me2+alu[i].prova2)*6))/10;

//     }
// }
