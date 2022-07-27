package AulaPOO;

import java.util.Scanner;

public class Frequencia {
    public static void main(String[] args) {
        int frequencia [];
        int x, n;
        frequencia = new int[2000];
        // Inicialização do vetor das frequências
        for (int i = 0; i < 2000; i++){
            frequencia [i] = 0;
        }
        //Leitura dos dados e atualização das frequências
        Scanner keyboard = new Scanner(System.in);
        n = keyboard.nextInt();
        for (int i = 0; i < n; i++){
            x = keyboard.nextInt();
            frequencia[x - 1] = frequencia[x - 1] + 1;
        }
        //Impressão da saída
        for (int i = 0; i < 2000; i++){
            if (frequencia[i] > 0)
                System.out.printf("%d aparece %d vez(es)\n", i+1, frequencia[i]);
        }
        keyboard.close();
    }
}