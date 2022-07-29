package AulaPOO.Atividade02;

import java.util.Scanner;

public class Gerenciador {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        Tabuleiro jogo = new Tabuleiro();
        String local;
        int valido = 0, jogadas = 0;

        while(true){
            System.out.println("::::: Iniciando Jogo da Velha :::::");
            jogo.Montar();
            do{
                System.out.println("Jogador 1, informe uma posição");
                local = keyboard.next();
                while(!jogo.Verificar(local)){
                    System.out.println("Jogada inválida, tente novamente!");
                    System.out.println("Jogador 1, informe uma posição");
                    local = keyboard.next();
                    valido = 0;
                }
                jogo.Jogada(local, "X");
                valido = 1;
            }while(valido == 0);
            jogadas++;
            valido = 0;
            jogo.Montar();
            if(!jogo.Vencedor(jogadas).equals("null")){
                break;
            }
            do{
                System.out.println("Jogador 2, informe uma posição");
                local = keyboard.next();
                while(!jogo.Verificar(local)){
                    System.out.println("Jogada inválida, tente novamente!");
                    System.out.println("Jogador 2, informe uma posição");
                    local = keyboard.next();
                    valido = 0;
                }
                jogo.Jogada(local, "O");
                valido = 1;
            }while(valido == 0);
            jogadas++;
            valido = 0;
            jogo.Montar();
            if(!jogo.Vencedor(jogadas).equals("null")){
                break;
            }
        }
        System.out.println("O "+ jogo.Vencedor(jogadas) + " venceu!");
    }
}
