package AulaPOO.Atividade_Pontuada04.src;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        String[] input = keyboard.next().split(";");
        for(int i = 0 ; i < input.length; i++){
            if(input[1].equals("CA")){
                Agencia agencia = new Agencia(input[2]);
            }
        }
    }
    // void criarAgencia(String nome){
    //     Agencia agencia = new Agencia(nome);
    // }
    private static void escrita(Agencia agencia){
        File dir = new File("/home/matheuslima/Documentos/WorkSpace/Java/AulaPOO/Atividade_Pontuada04/src");
        File arquivo = new File(dir, "Agencia.txt");

        try{
            arquivo.createNewFile();

            FileWriter fileWriter = new FileWriter(arquivo, false);

            PrintWriter printWriter = new PrintWriter(fileWriter);
            printWriter.println("Inserir dados");

            printWriter.flush(); //Libera a escrita do arquivo
            printWriter.close(); //Fecha o arquivo
        } catch (IOException e){
            e.printStackTrace();
        }
    }
    private static void leitura(){
        File dir = new File("/home/matheuslima/Documentos/WorkSpace/Java/AulaPOO/Atividade_Pontuada04/src");
        File arquivo = new File(dir, "Agencia.txt");

        try {
            FileReader fileReader = new FileReader(arquivo); //Arquivo que será lido

            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String linha = "";
            while((linha = bufferedReader.readLine()) != null){
                System.out.println(linha);
            }
            fileReader.close();
            bufferedReader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
