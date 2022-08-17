package AulaPOO.Atividade_Pontuada04.src;

import java.util.ArrayList;
import java.util.List;

public class Agencia {
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

    void criarConta(String identificador, double saldo, double limite){
        if(identificador.equals("CC")){
            Comum comum = new Comum(identificador, saldo);
            //Escreva no arquivo
        }       
        else if(identificador.equals("CE")){
            Especial especial = new Especial(identificador, saldo, limite);
            //Escreva no arquivo
        }
        else if(identificador.equals("CP")){
            Poupanca poupanca = new Poupanca(identificador, saldo);
            //Escreva no arquivo
        }
        else {
            System.out.println("Não foi possível identificar a operação desejada!");
        }
    }
    // void RO(String caminho){ //Incompleto
    //     Reader file = null;
    //     try {
    //         file = new FileReader(caminho);
    //         int count;
    //         while((count = file.read()) != -1){
    //             System.out.print((char)count);
    //         }
    //     } catch (FileNotFoundException e) {
    //         System.out.println(caminho + " não existe!");
    //     } catch (IOException e) {
    //         System.out.println("Erro na leitura do arquivo.");
    //     } finally{
    //         try {
    //             if(file != null){   
    //                 file.close();
    //             }
    //         } catch (IOException e) {
    //             System.out.println("Erro ao fechar o arquivo" + caminho);
    //         }
    //     }
    // }

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
}
