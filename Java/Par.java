import java.util.Scanner;
public class Par{
    public static void main(String args[]){
        Scanner ler = new Scanner(System.in);
        System.out.println("Informe um número.");
        double numero = ler.nextDouble();
        if (numero %2 == 0 && numero > 0){
            System.out.println("Este numero é positivo e par.");
        }
        else if (numero %2 == 0 && numero < 0){
            System.out.println("Este numero é negativo e par.");
        }
        else if (numero %2 != 0 && numero > 0){
            System.out.println("Este numero é positivo e impar.");
        }
        else if (numero %2 != 0 && numero < 0){
            System.out.println("Este numero é negativo e impar.");
        }
        ler.close();
    }
}