package AulaPOO.AtividadeReforco.src;

import java.util.ArrayList;
import java.util.List;

public class NotasSingleton implements NotasAlunosInterface{

    private static List<Double> notas = new ArrayList<>();
    private static NotasSingleton uniqueInstance;

    /**
     * 
     */
    private NotasSingleton(List<Double> nota) {
        NotasSingleton.notas = nota;
    }

    /**
     * 
     */
    
    // public synchronized static NotasSingleton getInstance(){
    //     if(uniqueInstance == null){
    //         uniqueInstance = new NotasSingleton();
    //     }
    //     return uniqueInstance;
    // }

    @Override
    public void insert(Double[] notas) {
        for(int i = 0; i<notas.length; i++){
        }
    }
}
