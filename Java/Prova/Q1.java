// package Prova;

// // Matheus Lima da Cruz e Áureo Galvão
// import java.util.Scanner;
// public class Q1 {
//     Scanner ler = new Scanner(System.in);
//     System.out.println("Informe a palavra no máximo 15 letras:");
//     String palavraChave = ler.next();
//     String letrasUsadas = "";
//     String palavraAdivinhada = "";
//     int MAX_TENTATIVAS = 6;
    
//     for(int i = 0; i < palavraChave.length(); i ++) {
//           palavraAdivinhada += "*";
          
//           for(int tentativas =0; ; tentativas++) {
//                if(tentativas == MAX_TENTATIVAS) {
//                    System.out.printf("Foram 6 tentativas... A palavra correta é '%s'." , palavraChave);
//                    System.exit(0);
//             }
//             System.out.printf("Rodada %d. Palavra até agora adivinhada: (%s)."
//                     , tentativas,
//                     palavraAdivinhada);
            
//             char letraTentada = new Scanner(System.in).next().charAt(0);
//             if(letrasUsadas.indexOf(letraTentada) >=0) {
//                 System.out.printf("Você ja tentou a letra %c.%n", letraTentada);
//             } else {
//                 letrasUsadas += letraTentada;
                
//                 if(palavraChave.indexOf(letraTentada)>=0) {
//                     palavraAdivinhada = "";
                    
//                     for(int j = 0; j<palavraChave.length();j++) {
//                         palavraAdivinhada +=letrasUsadas
//                                 .indexOf(palavraChave.charAt(j)) >= 0? palavraChave.charAt(j) :"*";
                                
//                     }
//                     if(palavraAdivinhada.contains("*")) {
//                         System.out.printf("A palavra tem a letra (%s).  ", letraTentada);
//                     }else {
//                         System.out.printf("Parabéns, você venceu!", palavraAdivinhada);
//                         System.exit(0);
                        
//                     }
//                 }else {
//                     System.out.printf("letra %c não exite na palavra.", letraTentada);
//                     }
                        
                
//             }
//           }
//     }
                     
//     }
// }

