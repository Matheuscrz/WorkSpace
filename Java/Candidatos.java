import java.util.Scanner;
public class Candidatos {
    public static void main(String args[]){
        Scanner ler = new Scanner(System.in);
        int numsexoF=0;
        int numsexoM=0;
        int sommed=0;
        int numpart=0;
        int quarenta=0;
        int mvinteum=0;
        double media,porcentagem;
        while (true){
            System.out.println("Idade:");
            int idade = ler.nextInt();
            System.out.println("Sexo:");
            char sexo = ler.next().charAt(0);
            System.out.println("Experiência:");
            char exp = ler.next().charAt(0);
            numpart++;
            if (idade == 0){
                break;
            }
            else if (sexo == 'F'){
                numsexoF++;
            }
            else if(sexo == 'M'){
                numsexoM++;
            }
            else if(exp == 'S'){
                sommed = sommed + idade;
            }
            else if(idade > 40){
                quarenta++;
            }
            else if(sexo == 'F' && idade <= 21 && exp == 'S'){
                mvinteum++;
            }
        }
        media = sommed /numpart;
        porcentagem = (quarenta/numpart)*100;
        System.out.printf("Número de candidatos do sexo feminino: %d. %n", numsexoF);
        System.out.printf("Número de candidatos do sexo masculino: %d. %n", numsexoM);
        System.out.printf("Idade média dos candidatos que já têm experiência: %.0f . %n",media);
        System.out.printf("Porcentagem de candidatos com mais de 40 anos: %.0f . %n",porcentagem);
        System.out.printf("Mulheres com experiência e idade inferior a 21: %.0f . %n",mvinteum);
        ler.close();
    }
}
