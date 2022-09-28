package AulaPOO.AtividadeReforco.src;

public class NotasAlunosIterator implements IteratorInterface{

    NotasIterator[] notaAluno;
    int count = 0;

    /**
     * @param notas
     */
    public NotasAlunosIterator(NotasIterator[] notaAluno) {
        this.notaAluno = notaAluno;
    }

    @Override
    public boolean hasNext() {
        if(count >= notaAluno.length || notaAluno[count] == null) return false;
        else return true;
    }

    @Override
    public Object next() {
        NotasIterator nota = notaAluno[count];
        count++;
        return nota;
    }
}
