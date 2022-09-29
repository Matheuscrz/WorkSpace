package AulaPOO.AtividadeReforco.src;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class NotasAlunosIterator implements IteratorInterface, NotasAlunosInterface{

    int count = 0;
    List<Double> notasAlunos = new ArrayList<>();
    

    /**
     * @param notasAlunos
     */
    public NotasAlunosIterator() {
    }

    /**
     * @param notas
     */

    @Override
    public boolean hasNext() {
        if(count >= notasAlunos.size() || notasAlunos == null) return false;
        else return true;
    }

    @Override
    public Object next() {
        List<Double> nota = notasAlunos;
        count++;
        return nota;
    }

    @Override
    public void insert(Double[] notas) {
        for(int i = 0; i<notas.length; i++){
            notasAlunos.add(notas[i]);
        }
    }
    // @Override
    // public String toString(){
    //     String aux;
    //     Iterator<Double> iterator = notasAlunos.iterator();  //Chamada do método iterator iterando ele dentro da lista
    //     Double soma = 0d;
    //     while(iterator.hasNext()) { //Verifica se tem algum elemento após ele, se tiver executa o que estiver no loop.
    //         Double next = iterator.next();
    //         aux += Double.toString(next) + ", ";
    //     }
    //     return aux;
    // }
}