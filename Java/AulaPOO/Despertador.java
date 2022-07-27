package AulaPOO;

import java.util.Scanner;

public class Despertador {
    public static void main(String[] args){

        //Declaração de variáveis locais
        int h1, m1, h2, m2, dif;
        Scanner keyboard = new Scanner(System.in);

        //Leitura de dados
        h1 = keyboard.nextInt();
        m1 = keyboard.nextInt();
        h2 = keyboard.nextInt();
        m2 = keyboard.nextInt();
        while (h1 != 0 || m1 != 0 || h2 != 0 || m2 != 0){
            dif = h2*60 + m2 - (h1*60 + m1);
            if (dif < 0) 
                dif+= 24*60;
            System.out.println (dif);
            h1 = keyboard.nextInt();
            m1 = keyboard.nextInt();
            h2 = keyboard.nextInt();
            m2 = keyboard.nextInt();
        }
        keyboard.close();
    }
}