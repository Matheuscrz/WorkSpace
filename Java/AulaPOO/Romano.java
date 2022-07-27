package AulaPOO;

import java.util.Scanner;

public class Romano {
    public static void main(String[] args) {
        int input, centena, dezena, unidade;
        String romano [] = {
        "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX",
        "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"
        };
        String saida = "";
        Scanner keyboard = new Scanner(System.in);
        input = keyboard.nextInt();

        //Processamento
        centena = input/100;
        dezena = (input % 100) / 10;
        unidade = input % 10;
        if(centena != 0)
            saida += romano[17+centena];
        if(dezena != 0)
            saida += romano[8+dezena];
        if(unidade != 0)
            saida += romano[unidade - 1];
        
        System.out.println(saida);
        keyboard.close();
    }
}
