package Java.Atividade_05.src;

import java.util.ArrayList;
import java.util.List;

public class Pais {
    private String nome;
    private List<String> medalhas = new ArrayList<String>();
     

    public Pais(String nome, List<String> medalhas) {
        this.nome = nome;
        this.medalhas = medalhas;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public List<String> getMedalhas() {
        return medalhas;
    }
    public void setMedalhas(List<String> medalhas) {
        this.medalhas = medalhas;
    }
}
