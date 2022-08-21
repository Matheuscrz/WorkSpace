package AulaPOO.Atividade04.src;

public class Conta {
    private String Identificador;
    private double any;
    /**
     * @param identificador
     */
    public Conta(String identificador) {
        Identificador = identificador;
    }
    /**
     * @param identificador
     * @param any
     */
    public Conta(String identificador, double any) {
        Identificador = identificador;
        this.any = any;
    }
    /**
     * @return the identificador
     */
    public String getIdentificador() {
        return Identificador;
    }
    /**
     * @param identificador the identificador to set
     */
    public void setIdentificador(String identificador) {
        Identificador = identificador;
    }
    /**
     * @return the any
     */
    public double getAny() {
        return any;
    }
    /**
     * @param any the any to set
     */
    public void setAny(double any) {
        this.any = any;
    }
    public double getSaldo(){
        return this.any;
    }
}
