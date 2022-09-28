package AulaPOO.AtividadeReforco.src;

public class NotasSingleton implements NotasAlunosInterface{

    private static Double [] notas;
    private static Singleton uniqueInstance;

    /**
     * 
     */
    private NotasSingleton(Double [] notas) {
        NotasSingleton.notas = notas;
    }

    /* DUVIDA 
     * Como posso gerar um construtor de um array e através do método insert para os
     * atributos do array para o construtor no método getInstance?
     */


    // public synchronized static NotasSingleton getInstance(){
    //     if(uniqueInstance == null)
    //         uniqueInstance = new NotasSingleton(notas);
    //     else 
    //         return uniqueInstance;
    // }


    @Override
    public void insert(Double[] notas) {
        // TODO Auto-generated method stub
        
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
