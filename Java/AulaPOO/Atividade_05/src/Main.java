package AulaPOO.Atividade_05.src;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        String[] input;
        do{
            input = keyboard.next().split(",");
            Pais nPais = new Pais(input[0], input[1]);
            
            
        }while(!input[1].equals("*") || !input[2].equals("*"));
        keyboard.close();
    }
}
