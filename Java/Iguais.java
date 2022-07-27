import java.util.Scanner;
public class Iguais {
    public static void main(String args[]){
        Scanner ler = new Scanner(System.in);
        System.out.println("Digite o primeiro valor.");
        double valor1 = ler.nextDouble();
        System.out.println("Digite o segundo valor.");
        double valor2 = ler.nextDouble();
        if (valor1 == valor2){
            System.out.println("Números Iguais.");
        }
        else if (valor1 > valor2){
            System.out.printf("O "+valor1+" é o número maior!");
        }
        else {
            System.out.printf("O "+valor2+"é o número maior!");
        }
        ler.close();
    }
}