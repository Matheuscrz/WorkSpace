import java.util.Scanner;
public class Diferenca {
    public static void main(String args[]){
        Scanner ler = new Scanner(System.in);
        System.out.println("Digite o primeiro valor.");
        double valor1 = ler.nextDouble();
        System.out.println("Digite o segundo valor.");
        double valor2 = ler.nextDouble();
        double calculo;
        if (valor1 > valor2){
            calculo = valor1 - valor2;
            System.out.printf("A diferença é: %.2f",calculo);
        }
        else if (valor2 > valor1){
            calculo = valor2 - valor1;
            System.out.printf("A diferença é: %.2f",calculo);
        }
        else {
            System.out.println("Os valores são iguais!");
        }
        ler.close();
    }
}