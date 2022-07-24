package ProjetoPIjava;
public class Bens {
    private Long idPessoa;
    private int codigo;
    private String name;
    private double valor;

    private Bens(){

    }
    public Bens(Long idPessoa, int codigo, String name, double valor) {
        this.idPessoa = idPessoa;
        this.codigo = codigo;
        this.name = name;
        this.valor = valor;
    }
    public Long getIdPessoa() {
        return idPessoa;
    }

    public void setIdPessoa(Long idPessoa) {
        this.idPessoa = idPessoa; 
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }


}
