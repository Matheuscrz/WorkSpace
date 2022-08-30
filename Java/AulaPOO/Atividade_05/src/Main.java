package AulaPOO.Atividade_05.src;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        String[] input;
        Resultado<String> Brasil = new Resultado<>(100);
        Resultado<String> Argentina = new Resultado<>(100);
        Resultado<String> Chile = new Resultado<>(100);
        do{
            input = keyboard.next().split(",");
            for(int i = 0; i < input.length ; i++){
                if(input[0].equals("Brasil")){
                    Brasil.adicionar(input[1]);
                }
                if(input[0].equals("Argentina")){
                    Argentina.adicionar(input[1]);
                }
                if(input[0].equals("Chile")){
                    Chile.adicionar(input[1]);
                }
            }
        }while(!input[0].equals("*") || !input[1].equals("*"));
        keyboard.close();
    }
}
