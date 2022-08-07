package AulaPOO.AtividadePontuada_03.src;

public class Balcao {
    int qtVeiculos;
    double TempoAtendimento;
    double tempoExecutado;
    
    /**
     * @param qtVeiculos
     * @param tempoAtendimento
     * @param tempoExecutado
     */
    public Balcao(int qtVeiculos, double tempoAtendimento, double tempoExecutado) {
        this.qtVeiculos = qtVeiculos;
        TempoAtendimento = tempoAtendimento;
        this.tempoExecutado = tempoExecutado;
    }
    /**
     * @return the qtVeiculos
     */
    public int getQtVeiculos() {
        return qtVeiculos;
    }
    /**
     * @param qtVeiculos the qtVeiculos to set
     */
    public void setQtVeiculos(int qtVeiculos) {
        this.qtVeiculos = qtVeiculos;
    }
    /**
     * @return the tempoAtendimento
     */
    public double getTempoAtendimento() {
        return TempoAtendimento;
    }
    /**
     * @param tempoAtendimento the tempoAtendimento to set
     */
    public void setTempoAtendimento(double tempoAtendimento) {
        TempoAtendimento = tempoAtendimento;
    }
    /**
     * @return the tempoExecutado
     */
    public double getTempoExecutado() {
        return tempoExecutado;
    }
    /**
     * @param tempoExecutado the tempoExecutado to set
     */
    public void setTempoExecutado(double tempoExecutado) {
        this.tempoExecutado = tempoExecutado;
    }
    void TempoExecutado(double tempo){
        tempoExecutado += tempo;
    }
    double tempoMedioS(double tempo, int quantidade){
        return TempoAtendimento = tempo/quantidade;
    }
    void quantidade(){
        qtVeiculos++;
    }
}
