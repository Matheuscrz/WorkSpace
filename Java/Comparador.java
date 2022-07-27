import java.util.Scanner;
public class Comparador {
    public static void main(String[] args) {
        Scanner scan= new Scanner(System.in);
        double v1,v2,v3;
        System.out.println("Digite o 1º valor");
        v1= scan.nextDouble();
        System.out.println("Digite o 2º valor");
        v2= scan.nextDouble();
        System.out.println("Digite o 3º valor");
        v3= scan.nextDouble();
        if (v1>v2 && v1>v3){
            System.out.println("O Numero maior é:"+v1);
    }
        if (v2>v1 && v2>v3){
            System.out.println("O Numero maior é:"+v2);
        }
         if (v3>v1 && v3>v2){
            System.out.println("O Numero maior é:"+v3);
        }
        scan.close();
    } 
}
    

