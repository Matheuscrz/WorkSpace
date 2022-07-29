package AulaPOO.Herança;

public class Mamifero extends Vertebrado {
    public Mamifero(){
        revestimento = "Pelo";
    }

    /* (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    
    @Override
    public String toString() {
        return "Mamifero" + "\n" + "Amamenta";
    }
}
