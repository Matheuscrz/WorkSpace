package AulaPOO.Atividade01.Q01;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int soma;
        String somaStr;
        String saida ;
        int valor1 = scan.nextInt();
        int valor2 = scan.nextInt();
        while(valor1 != 0 || valor2 != 0) {
            soma = valor1 + valor2;
            somaStr = Integer.toString(soma);
            saida = somaStr.replace("0","");
            System.out.println(saida);
            valor1 = scan.nextInt();
            valor2 = scan.nextInt();
        }
    }
}
