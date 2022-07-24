import java.util.Scanner;
public class AtletaCategorias {
    public static void main(String[] args) {
        Scanner scan= new Scanner(System.in);
        int id;
        System.out.println("Digite a Idade do Atleta:");
        id= scan.nextInt();
        if(id>=5 && id<=10){
            System.out.println("Categoria Infantil");
        }
        if(id>=11 && id<=17){
            System.out.println("Categoria Juvenil");
        }
        if(id>=18 && id<=30){
            System.out.println("Categoria Profissional");
        }
        if(id>=30){
            System.out.println("Categoria Sênior");
        }
    }
    
}