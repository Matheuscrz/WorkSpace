import java.util.Scanner;
public class MDC {
    public static void main(String args[]){
        Scanner ler = new Scanner(System.in);
        System.out.println("Digite o primeiro valor.");
        int num1 = ler.nextInt();
        System.out.println("Digite o segundo valor.");
        int num2 = ler.nextInt();
        int sobra;
        while (num2 != 0){
            sobra = num1 % num2;
            num1 = num2;
            num2 = sobra; 
            int resultado = num1;
        }
        System.out.printf("O MDC é: %d.",num1);
    }
}
