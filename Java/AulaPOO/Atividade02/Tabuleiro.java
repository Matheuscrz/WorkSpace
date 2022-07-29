package AulaPOO.Atividade02;

public class Tabuleiro {
    private String[][] matrix = {{"1","2","3"},{"4","5","6"},{"7","8","9"}};

    public String Montar(){
        for(int i = 0; i < 3; i++){
            for(int j = 0; j<3; j++){
                System.out.printf("  " + matrix[i][j]);
            }
            System.out.println("\n");
        }
        return null;
    }
    public boolean Verificar(String local){
        for(int i = 0; i < 3; i++){
            for(int j = 0; j < 3; j++){
                if(matrix[i][j].equals(local)) 
                    return true;
            }
        }
        return false;
    }
    public void Jogada(String local, String player){
        if(local.equals("1")){
            matrix[0][0] = player;
        }
        if(local.equals("2")){
            matrix[0][1] = player;
        }
        if(local.equals("3")){
            matrix[0][2] = player;
        }
        if(local.equals("4")){
            matrix[1][0] = player;
        }
        if(local.equals("5")){
            matrix[1][1] = player;
        }
        if(local.equals("6")){
            matrix[1][2] = player;
        }
        if(local.equals("7")){
            matrix[2][0] = player;
        }
        if(local.equals("8")){
            matrix[2][1] = player;
        }
        if(local.equals("9")){
            matrix[2][2] = player;
        }
    }
    public String Vencedor(int jogadas){
        String[] vetor = new String[8];
        String vencedor = "null";
        if(jogadas == 9){
            vencedor = "EMPATE";
        }
        vetor[0] = matrix[0][0] + matrix[0][1] + matrix[0][2];
        vetor[1] = matrix[0][0] + matrix[0][1] + matrix[0][2];
        vetor[2] = matrix[0][0] + matrix[0][1] + matrix[0][2];

        vetor[3] = matrix[0][0] + matrix[1][0] + matrix[2][0];
        vetor[4] = matrix[0][1] + matrix[1][1] + matrix[2][1];
        vetor[5] = matrix[0][2] + matrix[1][2] + matrix[2][2];

        vetor[6] = matrix[0][0] + matrix[1][1] + matrix[2][2];
        vetor[7] = matrix[0][2] + matrix[1][1] + matrix[2][0];

        for(int i = 0; i < vetor.length; i++){
            if(vetor[i].equals("XXX")){
                vencedor = "Jogador 1";
            }
            else if (vetor[i].equals("OOO")){
                vencedor = "Jogador 2";
            }
        }
        return vencedor;
    }
}
