package AulaPOO.AtividadeReforco.src;

import java.util.Scanner;

public class MainIterator {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        //NotasIterator[] notasAlunos = new Notas[15];
        while(input.hasNext()){
            String [] linha = input.nextLine().split(",");
            Double [] notas = new Double[linha.length];
            for (int i=0; i<linha.length; i++)
                notas[i] = Double.parseDouble(linha[i]);
                
        }
        input.close();
    }
}
