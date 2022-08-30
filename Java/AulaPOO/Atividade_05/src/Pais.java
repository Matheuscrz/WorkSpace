package AulaPOO.Atividade_05.src;

public class Pais {
    private String nome;
    private String medalha;
    /**
     * @param nome
     * @param medalha
     */
    public Pais(String nome, String medalha) {
        this.nome = nome;
        this.medalha = medalha;
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
     * @return the medalha
     */
    public String getMedalha() {
        return medalha;
    }
    /**
     * @param medalha the medalha to set
     */
    public void setMedalha(String medalha) {
        this.medalha = medalha;
    }
     
}
