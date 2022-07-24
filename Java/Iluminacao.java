import java.util.Scanner;
public class Iluminacao {
    public static void main(String args[]) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Quantos cômodos há na residência? ");
        int comodos = scan.nextInt(); 
        double area , potencia, lampada;
        int numlampada;
        int i = 0; 
        while (i < comodos){
            System.out.println("Qual o cômodo há ser calculado?");
            String como = scan.next();
            if (como.equals("Quarto")|| como.equals("quarto")){ 
                System.out.println("Digite a largura do cômodo");
                double lar = scan.nextDouble();
                System.out.println("Digite o comprimento do cômodo");
                double comp = scan.nextDouble();
                area = (lar*comp); /*Calculo de area.*/
                potencia = (area/3); /*Calculo de potencia.*/
                lampada = (potencia/10); /*Calculo do número de lampadas necessárias.*/
                numlampada =(int)lampada; 
                switch (numlampada) { /*Erro : Comodo pequeno.*/
                    case 0: numlampada +=1;/*O comodo pequeno resulta em um area menor que por consequência reduz a potencia necessária.*/
                    break; /*Essa potencia afeta o numero de lampadas que sera calculado através da potencia resultando em um valor igual a 0.*/
                } /*Quando o valor da 0 somamos 1 para o comodo não ficar sem iluminação.*/
                System.out.printf("O cômodo mede:%.2f m².%n",area);
                System.out.printf("A potência necessária para suprimir a iluminação nesta era é de:%.2f W.%n",potencia);
                System.out.printf("O número de lâmpadas para este cômodo é:%d. %n",numlampada);
            }
            else if (como.equals("Sala")|| como.equals("sala")){
                System.out.println("Digite a largura do cômodo");
                double lar = scan.nextDouble();
                System.out.println("Digite o comprimento do cômodo");
                double comp = scan.nextDouble();
                area = (lar*comp);
                potencia = (area/3);
                lampada = (potencia/10);
                numlampada =(int)lampada;
                switch (numlampada) {
                    case 0: numlampada +=1;
                    break;
                }
                System.out.printf("O cômodo mede:%.2f m².%n",area);
                System.out.printf("A potência necessária para suprimir a iluminação nesta era é de:%.2f W.%n",potencia);
                System.out.printf("O número de lâmpadas para este cômodo é:%d. %n",numlampada);
            }
            else if (como.equals("Salas")|| como.equals("sala")){
                System.out.println("Digite a largura do cômodo");
                double lar = scan.nextDouble();
                System.out.println("Digite o comprimento do cômodo");
                double comp = scan.nextDouble();
                area = (lar*comp);
                potencia = (area/3.2);
                lampada = (potencia/10);
                numlampada =(int)lampada;
                switch (numlampada) {
                    case 0: numlampada +=1;
                    break;
                }
                System.out.printf("O cômodo mede:%.2f m².%n",area);
                System.out.printf("A potência necessária para suprimir a iluminação nesta era é de:%.2f W.%n",potencia);
                System.out.printf("O número de lâmpadas para este cômodo é:%d. %n",numlampada);
            }
            else if (como.equals("Varanda")|| como.equals("varanda")){
                System.out.println("Digite a largura do cômodo");
                double lar = scan.nextDouble();
                System.out.println("Digite o comprimento do cômodo");
                double comp = scan.nextDouble();
                area = (lar*comp);
                potencia = (area/3.2);
                lampada = (potencia/10);
                numlampada =(int)lampada;
                switch (numlampada) {
                    case 0: numlampada +=1;
                    break;
                }
                System.out.printf("O cômodo mede:%.2f m².%n",area);
                System.out.printf("A potência necessaria para suprimir a iluminação nesta era é de:%.2f W.%n",potencia);
                System.out.printf("O número de lâmpadas para este cômodo é:%d. %n",numlampada);
            }
            else if (como.equals("Escritorio")|| como.equals("escritorio")){
                System.out.println("Digite a largura do cômodo");
                double lar = scan.nextDouble();
                System.out.println("Digite o comprimento do cômodo");
                double comp = scan.nextDouble();
                area = (lar*comp);
                potencia = (area/3.5);
                lampada = (potencia/10);
                numlampada =(int)lampada;
                switch (numlampada) {
                    case 0: numlampada +=1;
                    break;
                }
                System.out.printf("O cômodo mede:%.2f m².%n",area);
                System.out.printf("A potência necessária para suprimir a iluminação nesta era é de:%.2f W.%n",potencia);
                System.out.printf("O número de lâmpadas para este cômodo é:%d. %n",numlampada);
            }
            else if (como.equals("Banheiro")|| como.equals("banheiro")){
                System.out.println("Digite a largura do cômodo");
                double lar = scan.nextDouble();
                System.out.println("Digite o comprimento do cômodo");
                double comp = scan.nextDouble();
                area = (lar*comp);
                potencia = (area/3.5);
                lampada = (potencia/10);
                numlampada =(int)lampada;
                switch (numlampada) {
                    case 0: numlampada +=1;
                    break;
                }
                System.out.printf("O cômodo mede:%.2f m².%n",area);
                System.out.printf("A potência necessária para suprimir a iluminação nesta era é de:%.2f W.%n",potencia);
                System.out.printf("O número de lâmpadas para este cômodo é:%d. %n",numlampada);
            }
            else if (como.equals("Outros")|| como.equals("outros")){
                System.out.println("Digite a largura do cômodo");
                double lar = scan.nextDouble();
                System.out.println("Digite o comprimento do cômodo");
                double comp = scan.nextDouble();
                area = (lar*comp);
                potencia = (area/3.2);
                lampada = (potencia/10);
                numlampada =(int)lampada;
                switch (numlampada) {
                    case 0: numlampada +=1;
                    break;
                }
                System.out.printf("O cômodo mede:%.2f m².%n",area);
                System.out.printf("A potência necessária para suprimir a iluminação nesta era é de:%.2f W.%n",potencia);
                System.out.printf("O número de lâmpadas para este cômodo é:%d. %n",numlampada);
            }
            else {
                System.out.println("Entrem com os dados segundo a tabela informada!");
            }
            i++;
        }
    }
}