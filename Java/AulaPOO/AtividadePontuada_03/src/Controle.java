package AulaPOO.AtividadePontuada_03.src;

import java.util.Random;
import java.util.Scanner;

public class Controle {
    public static void main(String[] args) {
        Random aleatorio = new Random();
        int valor;
        Scanner keyboard = new Scanner(System.in);
        int tempo = keyboard.nextInt();
        double tempoSTotal = tempo * 60;
        double tempoAtendimento;
        double saida;
        Balcao balcao = new Balcao(0, 0d, 0d);
        while(tempoSTotal > balcao.getTempoExecutado()){
            valor = aleatorio.nextInt((2 - 1) + 1) + 1;
            if(valor == 1) {
                Automovel auto = new Automovel();
                tempoAtendimento = ((4 + auto.comprimento()) / auto.speed());
                balcao.TempoExecutado(tempoAtendimento);
                balcao.quantidade();
            }
            if (valor == 2){
                Caminhao cam = new Caminhao();
                tempoAtendimento = ((4 + cam.comprimento()) / cam.speed());
                balcao.TempoExecutado(tempoAtendimento);
                balcao.quantidade();
            }
        }
        saida = balcao.tempoMedioS(balcao.getTempoExecutado(), balcao.getQtVeiculos());
        System.out.printf("Tempo médio de atendimento em segundos por veiculo: %.2f\n", saida);
        keyboard.close();
    }    
}
