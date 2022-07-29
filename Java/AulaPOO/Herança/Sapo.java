package AulaPOO.Herança;

public class Sapo extends Vertebrado {
    public Sapo(){
        revestimento = "Nulo";
    }

    /* (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    
    @Override
    public String toString() {
        return "Sapo:" + "\n" + "Ovíparo" + "\n" + "Aquático e Terrestre";
    }
}
