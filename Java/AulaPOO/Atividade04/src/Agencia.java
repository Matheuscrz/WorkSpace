package AulaPOO.Atividade04.src;

import java.util.ArrayList;

public class Agencia {
    private String nome;
    private ArrayList<Conta> Contas = new ArrayList<Conta>();
    /**
     * 
     */
    public Agencia() {
    }
    /**
     * @param nome
     */
    public Agencia(String nome) {
        this.nome = nome;
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
    public ArrayList<Conta> getContas() {
        return Contas;
    }
    /**
     * @param contas the contas to set
     */
    public void setContas(ArrayList<Conta> contas) {
        Contas = contas;
    }
    void criarConta(String operacao, String Identificador, String any){
        if(operacao.equals("CC")){
            Contas.add(new Conta(Identificador));
        }
        if(operacao.equals("CP")){
            Contas.add(new Conta(Identificador));
        }
        if(operacao.equals("CE")){
            double limite = Double.parseDouble(any);
            Contas.add(new Conta(Identificador, limite));
        }
    }
    void transacao(String operacao, String Identificador, String any){
        if(operacao.equals("D")){
            for(int i = 0; i < Contas.size(); i++){
                if(Contas.get(i).getIdentificador().equals(Identificador)) Contas.get(i).setAny(Double.parseDouble(any));
            }
        }
        if(operacao.equals("R")){
            for(int i = 0; i < Contas.size(); i++){
                if(Contas.get(i).getIdentificador().equals(Identificador)) {
                    if(Contas.get(i).getAny() >= Double.parseDouble(any)) {
                        Double auxilia = Contas.get(i).getAny();
                        Contas.get(i).setAny(auxilia -= Double.parseDouble(any));
                    }
                    else System.out.println("Saldo insuficiente!");
                }
            }
        }
    }
}
