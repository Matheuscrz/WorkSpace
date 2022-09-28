package AulaPOO.AtividadeReforco.src;

public class NotasIterator implements NotasAlunosInterface{
    Double nota;

    /**
     * @param nota
     */
    public NotasIterator(Double nota) {
        this.nota = nota;
    }
    
    /*
     * DUVIDA
     * Como posso usar o método insert para inserir os dados no array sendo que não
     * foi criado este array e não posso criar como normalmente faria nesta classe?
     * Devo mudar de array para um ArrayList para conseguir?
     */
    @Override
    public void insert(Double[] notas) {
        for(int i = 0; i < notas.length; i++){
            //nota[i] = new Notas(notas[i]);
            //notas[i] = new Notas[15];
        }
    }
    // @Override
    // public String toString(){
    //     String aux;
    //     for(int i = 0; i<notas.length;i++){
    //         notas[i] = - notas[i];
    //     }
    //     Array.sort();
    //     for(int i = 0; i<notas.length;i++){
    //         notas[i] = - notas[i];
    //     }
    //     return aux;
    // }
}
