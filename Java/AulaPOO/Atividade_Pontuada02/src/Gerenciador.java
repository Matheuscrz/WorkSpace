package AulaPOO.Atividade_Pontuada02.src;

import java.util.Scanner;

public class Gerenciador {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        Tabuleiro jogo = new Tabuleiro();
        Jogador player = new Jogador();
        String local;
        int valida = 0, jogadas = 0;
        System.out.println("Informe o nome do primeiro jogador.");
        player.setPlayer1(keyboard.next());
        System.out.println("Informe o nome do segundo jogador.");
        player.setPlayer2(keyboard.next());
        while(true){
            System.out.println("::::: Iniciando Jogo da Velha :::::");
            jogo.Montar();
            do{
                System.out.println(player.getPlayer1() + ", informe uma posição");
                local = keyboard.next();
                while(!jogo.Verificar(local)){
                    System.out.println("Jogada inválida, tente novamente!");
                    System.out.println(player.getPlayer1() + ", informe uma posição");
                    local = keyboard.next();
                    valida = 0;
                }
                jogo.Jogada(local, "X");
                valida = 1;
            }while(valida == 0);
            jogadas++;
            valida = 0;
            jogo.Montar();
            if(!jogo.Vencedor(jogadas).equals("null")){
                break;
            }
            do{
                System.out.println(player.getPlayer2() + ", informe uma posição");
                local = keyboard.next();
                while(!jogo.Verificar(local)){
                    System.out.println("Jogada inválida, tente novamente!");
                    System.out.println(player.getPlayer2() + ", informe uma posição");
                    local = keyboard.next();
                    valida = 0;
                }
                jogo.Jogada(local, "O");
                valida = 1;
            }while(valida == 0);
            jogadas++;
            valida = 0;
            jogo.Montar();
            if(!jogo.Vencedor(jogadas).equals("null")){
                break;
            }
        }
        System.out.println(jogo.Vencedor(jogadas));
        keyboard.close();
    }
}
