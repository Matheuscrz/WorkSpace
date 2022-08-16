package AulaPOO.Atividade04.src;

public class Conta {
    private static final int Agencia = 1;
    private String nome;
    private String CPF;
    private int nconta;
    private double saldo = 0d;
    private int identificador;
    /**
     * @param nome
     * @param cPF
     * @param nconta
     * @param saldo
     * @param identificador
     */
    public Conta(String nome, String cPF, int nconta, double saldo, int identificador) {
        this.nome = nome;
        CPF = cPF;
        this.nconta = nconta;
        this.saldo = saldo;
        this.identificador = identificador;
    }
    /**
     * @return the agencia
     */
    public static int getAgencia() {
        return Agencia;
    }
    /**
     * @return the nome
     */
    public String getNome() {
        return nome;
    }
    /**
     * @param nome the nome to set
     */
    public void setNome(String nome) {
        this.nome = nome;
    }
    /**
     * @return the cPF
     */
    public String getCPF() {
        return CPF;
    }
    /**
     * @param cPF the cPF to set
     */
    public void setCPF(String cPF) {
        CPF = cPF;
    }
    /**
     * @return the conta
     */
    public int getnConta() {
        return nconta;
    }
    /**
     * @param conta the conta to set
     */
    public void setnConta(int conta) {
        this.nconta = conta;
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
    /**
     * @return the identificador
     */
    public int getIdentificador() {
        return identificador;
    }
    /**
     * @param identificador the identificador to set
     */
    public void setIdentificador(int identificador) {
        this.identificador = identificador;
    }
    void depositar(double valor){
        this.saldo += valor;
    }
    void sacar(double valor){
        if(this.saldo >= valor) saldo -= valor;
        System.out.println("Saldo Insuficiente!");
    }
    @Override
    public int hashCode() {
        // TODO Auto-generated method stub
        return super.hashCode();
    }
    @Override
    public boolean equals(Object obj) {
        // if (this == obj) return true;
        // if (obj == null || getClass() != obj.getClass()) return false;
        // Conta conta = (Conta) obj;
        return super.equals(obj);
    }
}
