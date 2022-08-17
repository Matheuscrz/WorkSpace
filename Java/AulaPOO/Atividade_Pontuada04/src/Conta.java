package AulaPOO.Atividade_Pontuada04.src;

public class Conta {
    private String identificador;
    private double saldo = 0d;
    /**
     * @param identificador
     * @param saldo
     */
    public Conta(String identificador, double saldo) {
        this.identificador = identificador;
        this.saldo = saldo;
    }
    /**
     * @return the identificador
     */
    public String getIdentificador() {
        return identificador;
    }
    /**
     * @param identificador the identificador to set
     */
    public void setIdentificador(String identificador) {
        this.identificador = identificador;
    }
    /**
     * @return the saldo
     */
    public double getSaldo() {
        return saldo;
    }
    /**
     * @param saldo the saldo to set
     */
    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }
    void depositar(double valor){
        this.saldo += valor;
    }
    void sacar(double valor){
        if(this.saldo >= valor) saldo -= valor;
        System.out.println("Saldo Insuficiente!");
    }
}
