// import java.util.Scanner;
// import java.io.File;
// public class Questao1 {

//     public static void main(String[] args) {
//         String palavraChave = "bicicleta";
//         String letraUsada = "";
//         String palavraAdivinhada = "";
//         int MAX_TENTATIVAS = 10;

//         for (int i = 0; i < palavraChave.length(); i++){
//             palavraAdivinhada += "-";

//             for(int tentativas = 0; ; tentativas++){
//                 if(int tentativas ==MAX_TENTATIVAS){
//                     System.out.printf("foram 10... A palavra era '%s'", palavraChave);
//                     System.exit( status: 0);
//                 }

//                 System.out.printf("Rodada%d. até agora adivinhada: %s. Qual a sua próxima letra?%n", tentativas,palavraAdivinhada);

//                 char letraTentada = new Scanner( System.in ).next().charAt(0);
//                 if(letraUsada.index0f(letraTentada) >= 0){
//                     System.out.printf("você já tentou a letra %c.%n", letraTentada);
//                 } else {
//                     letraUsada += letraTentada;

//                     if(palavraChave.index0f(letraTentada) >= 0){
//                         palavraAdivinhada = "";

//                         for(int j = 0; j < palavraChave.length();j++){
//                             palavraAdivinhada += letraUsada.index0f(palavraChave.charAt(j)) >=0 ? palavraChave.charAt(j) : "_";
//                        }

//                        if(palavraAdivinhada.contains("_")){
//                            System.out.printf("Muito bom! %s existe na palavra. Ainda tem letra escondidas%n", letraTentada);
//                        }else{
//                            System.out.printf("Parabêns! A palavra adivinhada era '%s'", palavraAdvinhada);
//                            System.exist ( status: 0);
//                        }
//                     } else{
//                         System.out.printf("Infelizmente a letra %c nao existe na palavra.", letraTentada);
//                     }
        
//                 }
//             } 
//         } 
//     } 
// }