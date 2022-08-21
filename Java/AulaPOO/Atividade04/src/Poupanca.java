package AulaPOO.Atividade04.src;

public interface Poupanca {
    public static double rendimento (double Saldo, double Taxa){
        return (Saldo*(Taxa/100) + Saldo);
    }
}
