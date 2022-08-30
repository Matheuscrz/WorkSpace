package AulaPOO.Atividade_05.src;

import java.rmi.server.ObjID;

class Resultados <T> {
    private T [] vet;
    private int topo;

    public Resultados(int size){
        topo = 0;
        vet = (T[]) new Object [size];
    }

    public void empilhar (T item){
        
    }
}
