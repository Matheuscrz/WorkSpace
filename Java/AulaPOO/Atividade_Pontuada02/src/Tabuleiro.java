package AulaPOO.Atividade_Pontuada02.src;

public class Tabuleiro {
    private String[][] matriz= {{"1","2","3"},{"4","5","6"},{"7","8","9"}};

    //Método de montagem da matriz no console
    public String Montar(){
        for(int i = 0; i < 3; i++){
            for (int j = 0; j < 3; j++){
                System.out.printf(" " + matriz[i][j]);
            }
            System.out.println("\n");
        }
        return null;
    }

    //Método para verificar se a jogada e valida e esta dentro da matriz de jogo
    public boolean Verificar(String local){
        for(int i = 0; i < 3; i++){
            for (int j = 0; j < 3; j++){
                if(matriz[i][j].equals(local))
                    return true;
            }
        }
        return false;
    }

    //Método para executar jogada baseado no valor informado
    public void Jogada(String local, String simbolo){
        if(local.equals("1")){
            matriz[0][0] = simbolo;
        }
        if(local.equals("2")){
            matriz[0][1] = simbolo;
        }
        if(local.equals("3")){
            matriz[0][2] = simbolo;
        }
        if(local.equals("4")){
            matriz[1][0] = simbolo;
        }
        if(local.equals("5")){
            matriz[1][1] = simbolo;
        }
        if(local.equals("6")){
            matriz[1][2] = simbolo;
        }
        if(local.equals("7")){
            matriz[2][0] = simbolo;
        }
        if(local.equals("8")){
            matriz[2][1] = simbolo;
        }
        if(local.equals("9")){
            matriz[2][2] = simbolo;
        }
    }

    //Método que armazena e confere todos os possíveis resultados retornando o vencedor
    public String Vencedor(int jogadas){
        String[] vitoria = new String[8];
        String vencedor = "null";
        if(jogadas == 9){
            vencedor = "EMPATE";
        }
        vitoria[0] = matriz[0][0] + matriz[0][1] + matriz[0][2];
        vitoria[1] = matriz[0][0] + matriz[0][1] + matriz[0][2];
        vitoria[2] = matriz[0][0] + matriz[0][1] + matriz[0][2];

        vitoria[3] = matriz[0][0] + matriz[1][0] + matriz[2][0];
        vitoria[4] = matriz[0][1] + matriz[1][1] + matriz[2][1];
        vitoria[5] = matriz[0][2] + matriz[1][2] + matriz[2][2];

        vitoria[6] = matriz[0][0] + matriz[1][1] + matriz[2][2];
        vitoria[7] = matriz[0][2] + matriz[1][1] + matriz[2][0];

        for(int i = 0; i < vitoria.length; i++){
            if(vitoria[i].equals("XXX")){
                vencedor = "O jogador 1 venceu!!";
            }
            else if (vitoria[i].equals("OOO")){
                vencedor = "O jogador 2 venceu!!";
            }
        }
        return vencedor;
    }

}
