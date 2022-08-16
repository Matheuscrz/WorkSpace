package AulaPOO.Atividade04.src;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Agencia {
    Scanner keyboard = new Scanner(System.in);
    Random aleat = new Random();
    private String nome;
    private List<Conta> contas = new ArrayList<Conta>();
    /**
     * @param nome
     * @param contas
     */
    public Agencia(String nome, List<Conta> contas) {
        this.nome = nome;
        this.contas = contas;
    }
    /**
     * @return the keyboard
     */
    public Scanner getKeyboard() {
        return keyboard;
    }
    /**
     * @param keyboard the keyboard to set
     */
    public void setKeyboard(Scanner keyboard) {
        this.keyboard = keyboard;
    }
    /**
     * @return the nome
     */
    public String getNome() {
        return nome;
    }
    /**
     * @param nome the nome to set
     */
    public void setNome(String nome) {
        this.nome = nome;
    }
    /**
     * @return the contas
     */
    public List<Conta> getContas() {
        return contas;
    }
    /**
     * @param contas the contas to set
     */
    public void setContas(List<Conta> contas) {
        this.contas = contas;
    }
    void criarConta(){
        System.out.println("Nome: ");
        String nome = keyboard.next();
        System.out.println("CPF: ");
        String cpf = keyboard.next();
        System.out.println("Tipo: ");
        int identificador = keyboard.nextInt();
        Conta conta = new Conta(nome, cpf, gerarConta(), 0, identificador);
        contas.add(conta);
    }
    int gerarConta(){
        int conta = aleat.nextInt((99999 - 10000) + 10000 ) + 10000;
        return conta;
    }
}
