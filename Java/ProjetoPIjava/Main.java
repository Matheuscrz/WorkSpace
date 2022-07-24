package ProjetoPIjava;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;



public class Main {
    static List<Pessoa> pessoasArray = new ArrayList<Pessoa>();
    static List<Bens> bensArray = new ArrayList<Bens>();
    public static void InserirPessoa(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Informe o código da pessoa: ");
        Long codigo = sc.nextLong();
        System.out.println("Informe o nome da pessoa: ");
        String nome = sc.next();
        Pessoa pessoa = new Pessoa(codigo,nome);
        pessoasArray.add(pessoa);
        
    }

    public static Pessoa getPessoa(Long codigo){
        for(Pessoa pessoa : pessoasArray){
            if(pessoa.getCodigo() == codigo){
                return pessoa;
            }
        }
        return null;
    }

    public static void InserirBem(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Informe o código da pessoa: ");
        Long codigo = sc.nextLong();
        System.out.println("Informe o código do bem: ");
        int codigoBem = sc.nextInt();
        System.out.println("Informe o nome do bem: ");
        String nome = sc.next();
        System.out.println("Informe o valor do bem: ");
        double valor = sc.nextDouble();
        Bens bem = new Bens(codigo,codigoBem,nome,valor);
        Pessoa pessoa = getPessoa(codigo);
        pessoa.setBens(bem);
        bensArray.add(bem);
    }

    public static void imprimirPessoas(){
        String pessoas = "";
        for(Pessoa pessoa : pessoasArray){
            pessoas += pessoa.toString() + "\n";
        }
        System.out.println(pessoas);
    }

    public static void removerPessoa(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Informe o código da pessoa: ");
        Long codigo = sc.nextLong();
        Pessoa pessoa = getPessoa(codigo);
        pessoasArray.remove(pessoa);
    }

    public static void removerBensPessoa(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Informe o código da pessoa: ");
        Long codigo = sc.nextLong();
        Pessoa pessoa = getPessoa(codigo);
        System.out.println("Informe o código do bem: ");
        int codigoBem = sc.nextInt();
        Bens bens = pessoa.getBens(codigoBem);
        pessoa.removeBens(bens);
    }
    public static int pegarValorArray(){
        return pessoasArray.size();
    }

    public static void consultarPessoa(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Informe o código da pessoa: ");
        Long codigo = sc.nextLong();
        String returnPessoa = "";
        Pessoa pessoa = getPessoa(codigo);
        String bensPessoa = pessoa.imprimirBens();
        returnPessoa += pessoa.toString() + "\n" + bensPessoa;
        System.out.println(returnPessoa);
    }

    public static void salvarEmTxt(){
        String pessoas = "";
        for(Pessoa pessoa : pessoasArray){
            pessoas += pessoa.getCodigo().toString() + ";" + pessoa.getNome().toString() + "\n";
        }
        Path path = Paths.get("dadosPessoas.txt");
        try {
            Files.write(path, pessoas.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        String bens = "";
        for(Bens bem : bensArray){
            bens += Long.toString(bem.getIdPessoa()) + ";" + Integer.toString(bem.getCodigo()) + ";" + bem.getName() + ";" + Double.toString(bem.getValor()) + "\n";
        }
        Path path2 = Paths.get("dadosBens.txt");
        try {
            Files.write(path2, bens.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public static void CarregarArquivos() throws IOException{
        String dadosPessoas = new String(Files.readAllBytes(Paths.get("dadosPessoas.txt")));
        String dadosBens = new String(Files.readAllBytes(Paths.get("dadosBens.txt")));
        String[] pessoas = dadosPessoas.split("\n");
        String[] bens = dadosBens.split("\n");
        for(int i = 0; i < pessoas.length; i++){
            String[] pessoa = pessoas[i].split(";");
            Long codigo = Long.parseLong(pessoa[0]);
            String nome = pessoa[1];
            Pessoa p = new Pessoa(codigo,nome);
            pessoasArray.add(p);
        }
        for(int i = 0; i < bens.length; i++){
            String[] bensPessoa = bens[i].split(";");
            Long codigo = Long.parseLong(bensPessoa[0]);
            int codigoBem = Integer.parseInt(bensPessoa[1]);
            String nome = bensPessoa[2];
            double valor = Double.parseDouble(bensPessoa[3]);
            Bens b = new Bens(codigo,codigoBem,nome,valor);
            bensArray.add(b);
            Pessoa pessoa = getPessoa(codigo);
            pessoa.setBens(b);
        }

    }
    
    public static void main(String[] args) throws IOException {
        CarregarArquivos();
        int opcao = 0;
        while (opcao != 7){
            Scanner sc = new Scanner(System.in);
            System.out.println("Menu do programa:"
                    + "\n1 - Inserir pessoa"
                    + "\n2 - Inserir bem"
                    + "\n3 - Excluir pessoa"
                    + "\n4 - Excluir bem de uma pessoa"
                    + "\n5 - Listar Pessoa"
                    + "\n6 - Consultar Pessoa"
                    + "\n7 - Sair" + "\n");
            opcao = sc.nextInt();
            if(opcao == 1){
                InserirPessoa();
            }
            if(opcao == 2){
                InserirBem();
            }
            if(opcao == 3){
                removerPessoa();
            }
            if(opcao == 4){
                removerBensPessoa();
            }
            if(opcao == 5){
                imprimirPessoas();
            }
            if(opcao == 6){
                consultarPessoa();
            }
            if(opcao == 7){
                salvarEmTxt();
                System.out.println("Obrigado por utilizar o programa!");
                break;
            }
            
        }
    }
}


