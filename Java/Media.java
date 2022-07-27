import java.util.Scanner;
public class Media{
    public static void main(String args[]){
        Scanner ler = new Scanner(System.in);
        System.out.println("Número de alunos na turma.");
        int numeroalunos = ler.nextInt();
        int contador = 0 ;
        double mediafinal;
        int aprovado = 0;
        int provafinal = 0;
        int reprovadomedia = 0;
        int reprovadofalta = 0;
        while (contador < numeroalunos){
            System.out.println("Nome do aluno:");
            String nome = ler.next();
            System.out.println("1º Nota:");
            double nota1 = ler.nextDouble();
            System.out.println("2º Nota:");
            double nota2 = ler.nextDouble();
            System.out.println("3º Nota:");
            double nota3 = ler.nextDouble();
            System.out.println("Número de faltas:");
            int faltas = ler.nextInt();
            mediafinal = ((nota1*3)+(nota2*3)+(nota3*4))/10; 
            if (mediafinal >= 6 && faltas <= 20){
                System.out.printf("O aluno %s está aprovado.%n",nome);
                aprovado++;
            }
            else if (mediafinal <= 6 && mediafinal >= 4){
                if (faltas <= 20){
                    System.out.printf("O aluno %s está em prova final.%n",nome);
                    provafinal++;
                }
            }
            else if (mediafinal <4){
                System.out.printf("Média menor que 4, o aluno %s está reprovado.%n",nome);
                reprovadomedia++;
            }
            else if (faltas > 20){
                System.out.printf("Aluno %s repovado por faltas.%n",nome);
                reprovadofalta++;
            }
            contador++;
        }
        double percentualapro=(aprovado/numeroalunos)*100;
        double percentualrmed=(reprovadomedia/numeroalunos)*100;
        double percentualrfal=(reprovadofalta/numeroalunos)*100;
        System.out.printf("O número de estudantes aprovados ou em prova final é %d. %n",(aprovado+provafinal));
        System.out.printf("O percentual de aprovação é de:%.0f. %n",percentualapro);
        System.out.printf("O número de alunos reprovados por média é %d, um percentual de:%.0f. %n",reprovadomedia,percentualrmed);
        System.out.printf("O número de alunos reprovados por falta é %d, um percentual de:%.0f. %n",reprovadofalta,percentualrfal);
        ler.close();
    }
}