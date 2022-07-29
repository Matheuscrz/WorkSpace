package AulaPOO.Herança;

public class Ave extends Vertebrado{
    public Ave(){
        revestimento = "Penas";
    }

    /* (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    
    @Override
    public String toString() {
        return "Ave" + "\n" + "Põe ovos";
    }
}
