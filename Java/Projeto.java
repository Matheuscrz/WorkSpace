// /*Função*/
// import java.util.Scanner;
// import java.io.File;

// public class Projeto{
// 	static void compare(String checagem){ /*Metodo criado para verificar intem selecionado na lista.*/
// 		if (checagem.equals("Inserir") || checagem.equals("inserir")){ /*Verifica item selecionado do menu. */
//             consult();/*Consulta se usuario existe e retorna True-caso tenha e False- caso n tenha.*/
//             if (true){
//                 System.out.println("Usuario Cadastrado.");/*Avisa que já tem um ususario cadastrado com mesmo codigo.*/
//                 break;/*Encerra o programa.*/
//             }
//             else if(false){
//                 pessoa();/*Cadastrar ususario.*/
//             }
// 		}
// 		else if (checagem.equals("Excluir")||checagem.equals("excluir")){/*Verifica item selecionado do menu. */
//             consult();
//             if (true){
//                 /*Há usuario, executa comando de exclusão.*/
//             }
//             else if(false){
//                 System.out.println("Não existe o usuario que deseja excluir.");
//                 break;
//             }		
//         }
// 		else if (checagem.equals("Lista")||checagem.equals("lista")){
//             System.out.println("Printar dados do banco de dados.");
// 		}
// 		else if (checagem.equals("Consultar")||checagem.equals("consultar")){
//             consult();
//             System.out.println("Printar dados do usuario pesquisado.");
// 		}
// 		else if (checagem.equals("Sair")||checagem.equals("sair")){
//             /*Salvar dados */
//             System.out.println("Dados Salvos!");
//             System.out.println("Encerrando programa.");
//             break;
// 		}
// 		else {
// 			System.out.println("Digite uma entrada valida!");
// 		    check();
// 		}
// 	}
// 	static void menu(){/*Função do menu. */
// 	    Scanner ler = new Scanner(System.in);
// 		System.out.println("O que deseja fazer?");
// 		System.out.println("Inserir, Excluir, Lista, Consultar ou Sair?");
// 		String checagem = ler.next(); /*Variavel criada para comparação em outra função.*/
// 		compare(checagem);
// 	}
//     static boolean consult(){/*Função que consulta se usuario existe no banco de dados.*/
//         long consultar = pessoa();
//         switch(consultar){
//             case
//         }
//         return ;
        
//     }
    
//     static long pessoa(){/*Função de entrada de dados.*/
//         Scanner ler = new Scanner(System.in);
//         System.out.println("Usuario:");
//         String nome = ler.next();
//         System.out.println("Codigo:");
//         long codigo = ler.nextLong();
//         bens();
//         System.out.printf(nome,codigo);
//         return codigo;
//     }
//     static void arquivo(){ /*Função que cria arquivo.*/
//         File arquivo = new File("C:\Users\Matheus Lima\Documents\Dados.txt");
//         try {
//             if (!arquivo.exists()){
//                 arquivo.createNewFile();
//             }
//         }
        
//     }
//     static void bens(){/*Função que coleta dados.*/
//         Scanner ler = new Scanner(System.in);
//         System.out.println("Objeto:");
//         String Nome = ler.next();
//         System.out.println("Codigo:");
//         int Codigo = ler.nextInt();
//         System.out.println("Valor:");
//         double valor = ler.nextDouble();
//         System.out.printf(Nome,Codigo,valor);
//     }
//     public static void main(String[] args) { /*Função principal.*/
//         check();
// 	}
// }
