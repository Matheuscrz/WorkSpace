import java.util.Scanner;
public class Renda {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
        int codigo, horas, dependentes;
        double salariobruto,salarioliquido,valorInss,valorIr,sposInss;
        int i = 0;
        while (i<8){
            System.out.println("Informe o nome do Funcionário.");
            String nome = scan.next();
            System.out.println("Informe o código do Funcionário.");
            codigo = scan.nextInt();
            System.out.println("Informe o número de horas trabalhadas no dia.");
            horas = scan.nextInt();
            System.out.println("Informe o número de dependentes do funcionário.");
            dependentes = scan.nextInt(); 
            salariobruto = (20*horas)+(35*dependentes);
            valorInss = salariobruto*0.105 ;
            sposInss = salariobruto - valorInss;
            valorIr = sposInss * 0.11 ;
            salarioliquido = sposInss - valorIr;
            System.out.printf("Funcionário %s identificado pelo codigo %d. %n", nome , codigo);
            System.out.printf("O valor descontado do Inss é de %.2f R$. %n",valorInss);
            System.out.printf("O valor do imposto de renda descontado foi de %.2f R$. %n",valorIr);
            System.out.printf("O salario liquido do funcionário será de %.2f R$. %n",salarioliquido);
            i++;
        }
	}
}
