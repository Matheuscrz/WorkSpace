import java.util.Scanner;
public class Mensagem {
    public static void main(String[] args) {
        Scanner scan= new Scanner(System.in);
        char turno;
        System.out.println("Digite de acordo com o turno que estuda: M-Matutino| V-Vespertino |N-Noturno");
        turno = scan.nextLine().charAt(0);
        switch (turno){
            case 'M' : System.out.println("Bom Dia!!");
            break;
            case 'V' : System.out.println("Boa Tarde!!");
            break;
            case 'N' : System.out.println("Boa Noite!!");
            break;
            default: System.out.println("Por favor Informe um Valor Válido!");
        }   
        }
    }