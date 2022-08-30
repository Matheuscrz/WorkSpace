package AulaPOO.Atividade_05.src;

class Resultado <T> {
    private T [] vet;
    private int topo;
    private int mOuro;
    private int mPrata;
    private int mBronze;

    public Resultado(int size){
        topo = 0;
        mOuro = 0;
        mPrata = 0;
        mBronze = 0;
        vet = (T[]) new Object [size];
    }

    public void contarMedalhaOuro(){
        for (int i = 0; i < vet.length; i ++){
            if(vet[i].equals("ouro")) mOuro++;
        }
    }
    public void contarMedalhaPrata(){
        for (int i = 0; i < vet.length; i ++){
            if(vet[i].equals("ouro")) mPrata++;
        }
    }
    public void contarMedalhaOBronze(){
        for (int i = 0; i < vet.length; i ++){
            if(vet[i].equals("ouro")) mBronze++;
        }
    }
    public void adicionar(T medalha){
        if(topo >= vet.length){
            vet[topo] = medalha;
            topo++;
        }
    }

    /* (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    
    @Override
    public String toString() {
        return " ouro:" + mOuro + " prata:" + mPrata + " bronze:" + mBronze;
    }

    /**
     * @return the vet
     */
    public T[] getVet() {
        return vet;
    }

    /**
     * @param vet the vet to set
     */
    public void setVet(T[] vet) {
        this.vet = vet;
    }

    /**
     * @return the topo
     */
    public int getTopo() {
        return topo;
    }

    /**
     * @param topo the topo to set
     */
    public void setTopo(int topo) {
        this.topo = topo;
    }

    /**
     * @return the mOuro
     */
    public int getmOuro() {
        return mOuro;
    }

    /**
     * @param mOuro the mOuro to set
     */
    public void setmOuro(int mOuro) {
        this.mOuro = mOuro;
    }

    /**
     * @return the mPrata
     */
    public int getmPrata() {
        return mPrata;
    }

    /**
     * @param mPrata the mPrata to set
     */
    public void setmPrata(int mPrata) {
        this.mPrata = mPrata;
    }

    /**
     * @return the mBronze
     */
    public int getmBronze() {
        return mBronze;
    }

    /**
     * @param mBronze the mBronze to set
     */
    public void setmBronze(int mBronze) {
        this.mBronze = mBronze;
    }
    
}
