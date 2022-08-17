package AulaPOO.Atividade_Pontuada04.src;

public class Especial extends Conta{
    private double limite;

    /**
     * @param identificador
     * @param saldo
     * @param limite
     */
    public Especial(String identificador, double saldo, double limite) {
        super(identificador, saldo);
        this.limite = limite;
    }

    /**
     * @return the limite
     */
    public double getLimite() {
        return limite;
    }

    /**
     * @param limite the limite to set
     */
    public void setLimite(double limite) {
        this.limite = limite;
    }
    void JurosEspecial(double taxa){
        
    }
}
