package ProjetoPIjava;
import java.util.ArrayList;
import java.util.List;
public class Pessoa{

    private long codigo;
    private String nome;
    private List <Bens> bensArray = new ArrayList<Bens>();
    private int SomatorioBens;
    public Pessoa(){

    };

    public Pessoa(long codigo, String nome){
        this.codigo = codigo;
        this.nome = nome;
    }

    public Long getCodigo(){
        return codigo;
    }

    public void setCodigo(long codigo){
        this.codigo = codigo;
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setBens(Bens bens){
        bensArray.add(bens);
    }

    public List<Bens> getBens(){
        return bensArray;
    }

    public Bens getBens(int codigo){
        for(Bens bens : bensArray){
            if(bens.getCodigo() == codigo){
                return bens;
            }
        }
        return null;
    }

    public void removeBens(Bens bens){
        bensArray.remove(bens);
    }

    private int calSomatorio(){
        SomatorioBens = 0;
        for(Bens bens : bensArray){
            SomatorioBens += bens.getValor();
        }
        return SomatorioBens;
    }

    public String imprimirBens(){
        String bensString = "";
        for(Bens bens : bensArray){
            bensString += bens.getCodigo() + ";" + bens.getName() + ";" + bens.getValor() + ";";
        }
        return bensString;
    }

    @Override
    public String toString(){
        return "Cod Pessoa" + " Nome da Pessoa" + " Valor total Bens" + "\n" +
                codigo + "            " + nome + "              " + calSomatorio();
    };


}