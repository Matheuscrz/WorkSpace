package AulaPOO.AtividadePontuada_03.src;

import java.util.Random;

public class Automovel implements Veiculo {

    @Override
    public double comprimento() {
        Random comp = new Random();
        double valor = comp.nextDouble() * (5 - 3) + 3;
        return valor;
    }

    @Override
    public double speed() {
        Random vel = new Random();
        double valor = vel.nextDouble() * (5 - 3) + 3;
        return valor;
    }

}
