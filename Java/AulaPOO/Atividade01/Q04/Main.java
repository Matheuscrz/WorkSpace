package AulaPOO.Atividade01.Q04;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = 0;
        int aux = 0;
        int count = 0;
        int processos;
        String input;
        char [] array;
        do{
            input = scan.next();
            processos = scan.nextInt();
            array = input.toCharArray();
            while(i < array.length){
                if(array[i] == 'W') {
                    aux++; i++;
                }
                else if(array[i] == 'R' && array[i + 1] == 'W') {
                    aux++; i++;
                }
                else if(array[i] == 'R' && array[i + 1] == 'R'){
                    while(array[i] == 'R' && array[i] == 'R' && count<processos){
                        count++; i++;
                    }
                    aux++;
                    count = 0;
                }
                else {
                    aux++;
                    i++;
                }
            }
        }while(input != "EOF");
        scan.close();
    }
}
