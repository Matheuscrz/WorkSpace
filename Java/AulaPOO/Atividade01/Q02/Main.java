package AulaPOO.Atividade01.Q02;

import java.util.Scanner;

// a = A,a,4;
// e = E,e,3;
// i = I,i,1,l;
// o = O,o,0;
// s = S,s,5;
public class Main {
    public static void main(String[] args){
        Scanner scan  = new Scanner(System.in);
        int nCasoTest = scan.nextInt();
        String input;
        int count = 0;
        while(count < nCasoTest){
            input = scan.next();
            int possibilidades = 1;
            for (int i = 0; i < input.length(); i++){
                char caractere = input.charAt(i);
                switch(caractere){
                    case 'A' : possibilidades = possibilidades * 3; break; 
                    case 'a' : possibilidades = possibilidades * 3; break;
                    case 'E' : possibilidades = possibilidades * 3; break;
                    case 'e' : possibilidades = possibilidades * 3; break;
                    case 'i' : possibilidades = possibilidades * 4; break;
                    case 'I' : possibilidades = possibilidades * 4; break;
                    case 'o' : possibilidades = possibilidades * 3; break;
                    case 'O' : possibilidades = possibilidades * 3; break;
                    case 'S' : possibilidades = possibilidades * 3; break;
                    case 's' : possibilidades = possibilidades * 3; break;
                    default : possibilidades = possibilidades * 2;
                }
            }
            System.out.println(possibilidades);
            count++;
        }
    }
}
