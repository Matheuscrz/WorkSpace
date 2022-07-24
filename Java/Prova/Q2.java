// package Prova;
// // Matheus Lima Da Cruz e Áureo Galvão
// import java.util.Arrays;
// import java.util.Scanner;

// public class Q2 {
//     public static void main(String[] args){
//         Scanner ler = new Scanner(System.in);
//         System.out.println("Quantidade de elementos a serem lidos:");
//         int qtd = ler.nextInt(); // tamanho do vetor
//         int v[] = new int[qtd]; // declaração do vetor "v"
//         boolean ver = false;
//         int rept[] = new int[qtd];
//         for (int i=0; i<qtd; i++) {
//             System.out.printf("Informe %d º valor:", (i+1));
//             v[i] = ler.nextInt(); //inserindo dados digitados no vetor
//         }
//         System.out.println();
//         for(int x=0;x<v.length;x++)
//         {
//             System.out.print(v[x]);
//         }
//         System.out.println();
//         for (int j=0;j<v.length;j++){
//             for (int z= j+1; z <rept.length ; z++){
//                 if (v[j]==v[z]);
//                 rept[j] = v[j];
//             }
//         }
//         for(int a=0;a<rept.length;a++)
//         {
//             System.out.print(rept[a]);
//         }
//         System.out.println();
//     }
// }
// import java.util.Arrays;

// public class questao1 {
   
//     public int[] retornarPrimeiroVetor(int[] vetor){
//         int[] vetor1 = new int[vetor.length];
//         for(int i = 0; i < vetor.length; i++){
//             for(int j = 0; j < vetor1.length; j++){
//                 if(vetor1[j] == 0){
//                     vetor1[j] = vetor[i];
//                     break;
//                 }
//                 if(vetor1[j] == vetor[i]){
//                     break;
//                 }
//             }
//         }
//         return vetor1;     
//     } 

//     public int[] retornarSegundoVetor(int[] vetor,int[] vetor1){
//         int[] vetor2 = new int[vetor.length];
//         int aux = 0;
//         for(int i = 0; i < vetor1.length; i++){
//             for(int j = 0; j < vetor.length; j++){
//                 if(vetor[j] == vetor1[i] && vetor[j] != 0){
//                     aux++;
//                 }
//             }
//             vetor2[i] = aux;
//             aux = 0;
//         }   


//         return vetor2;
//     }

//     public static void main(String[] args){
//         questao1 questao1 = new questao1();
//         int[] vetor = {5,3,7,3,5,7,7,7,3,7};
//         int[] vetor1 = questao1.retornarPrimeiroVetor(vetor);
//         int[] vetor2 = questao1.retornarSegundoVetor(vetor,vetor1);
//         System.out.println(Arrays.toString(vetor));
//         System.out.println(Arrays.toString(vetor1));
//         System.out.println(Arrays.toString(vetor2));
//     }
// }