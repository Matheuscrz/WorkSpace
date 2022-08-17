package AulaPOO.Atividade_Pontuada04.src;

import java.util.ArrayList;
import java.util.List;

public class Agencia {
    private String nome;
    
    /**
     * @param nome
     * @param contas
     */
    public Agencia(String nome) {
        this.nome = nome;
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
    void criarConta(String identificador, String valor){
        if(identificador.equals("CC")){
            Comum comum = new Comum(identificador, 0);
        }
        if(identificador.equals("CE")){
            Double limite =  Double.parseDouble (valor); 
            Especial especial = new Especial(identificador, 0, limite);
        }
        if(identificador.equals("CP")){
            Poupanca poupanca = new Poupanca(identificador, 0);
        }
        else {
            
        }
    }
}
