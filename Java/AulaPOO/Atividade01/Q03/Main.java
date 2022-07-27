package AulaPOO.Atividade01.Q03;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan  = new Scanner(System.in);
        int nCasoTest = scan.nextInt();
        String input;
        int count = 0;
        while(count < nCasoTest){
            input = scan.next();
            if((input.contains("o") && (input.contains("n") || input.contains("e"))) 
            || (input.contains("n") && (input.contains("o") || input.contains("e"))) 
            || (input.contains("e") && (input.contains("n") || input.contains("o")))
            && (!input.contains("t"))) {
                System.out.println("1");
            }
            else if((input.contains("o") && (input.contains("t") || input.contains("w"))) 
            || (input.contains("t") && (input.contains("w") || input.contains("o"))) 
            || (input.contains("w") && (input.contains("t") || input.contains("o")))){
                System.out.println("2");
            }
            else if((input.contains("t") && input.contains("h") && input.contains("r") && input.contains("e")) 
            || (input.contains("t") || (input.contains("h") && input.contains("r") && input.contains("e"))) 
            || (input.contains("h") || (input.contains("t") && input.contains("r") && input.contains("e"))) 
            || (input.contains("r") || (input.contains("h") && input.contains("t") && input.contains("e"))) 
            || (input.contains("e") || (input.contains("h") && input.contains("r") && input.contains("t")))){
                System.out.println("3");
            }
            else {
                System.out.println("Não foi possível identificar a palavra devido a vários erros ortográficos.");
            }
            count++;
        }
        scan.close();
    }
}
