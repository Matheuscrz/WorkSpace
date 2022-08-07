package AulaPOO.AtividadePontuada_03.src;

import java.util.Random;

public class Caminhao implements Veiculo {

    double lenghtCarroceria(){
        Random aleatorio = new Random();
        int tipoVeiculo = aleatorio.nextInt((6 - 1) + 1) + 1;
        switch(tipoVeiculo){
            case 1: return 10d;
            case 2: return 11d;
            case 3: return 12d;
            case 4: return 13d;
            case 5: return 14d;
            case 6: return 15d;
            default: return 0d;
        }
    }

    @Override
    public double comprimento() {
        Random comp = new Random();
        double comprimento = comp.nextDouble() * (4 - 3) + 3;
        int chance = comp.nextInt((2 - 1) + 1) + 1;
        if (chance == 1) return comprimento += this.lenghtCarroceria();
        return comprimento;
    }

    @Override
    public double speed() {
        Random vel = new Random();
        double valor = vel.nextDouble() * (3.5 - 2) + 2;
        return valor;
    }
}
