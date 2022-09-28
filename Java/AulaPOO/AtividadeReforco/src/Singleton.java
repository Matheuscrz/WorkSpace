package AulaPOO.AtividadeReforco.src;

public class Singleton {
    private static Singleton uniqueInstance = new Singleton();

    Singleton() {
    }

    public static synchronized Singleton getInstace() {
        return uniqueInstance;
    }
}
