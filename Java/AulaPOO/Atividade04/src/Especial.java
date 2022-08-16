package AulaPOO.Atividade04.src;

public class Especial extends Conta{
    public Especial(String nome, String cPF, int conta, double saldo, int identificador) {
        super(nome, cPF, conta, saldo, identificador);
        //TODO Auto-generated constructor stub
    }

    private double limite;

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
