//Função que inicia o processo pegando o txt no html
var openFile = (event) => {
    //Função que converte String em ascci
    var asc = (String) => {
        return String.charCodeAt(0);
    };
    //Função que converte texto ascci em String
    var char = (Ascii) => {
        return String.fromCharCode(Ascii);
    };
    //Chave para codificação e decodificação do texto
    var chave = "PF";
    var input = event.target;
    //Função que ler dados do arquivo
    var reader = new FileReader();
    //Função que processa o dado lido do txt
    reader.onload = () => {
        var dados = reader.result; //Função com dados de texto em string, pode trabalhar com ela.
        //Variaveis que armazenaram e faram processo de dados e contagens.
        let len;
        let p = 0;
        //Variaveis que seram usadas paar armazenar os dados para saida
        var text = ""; //Função que recebe o valor de saida
        var textD = "";
        //Função que criptografa o texto
        //Loop feito atraves de recursão
        var cript = (n) => {
            if (n > dados.length) return;
            p--;
            //Conversão do texto para ascci e criptografia somando o valor de cada carctere ascci com a chave
            len = ((asc(dados.substr(n, 1))) + (asc(chave.substr(p, 1))));
            if (p == chave.length) {
                p = 0;
            }
            // if (len > 255) {
            //     len -= 256;
            // }
            if (len < 0) {
                len += 256;
            }
            //Adicionando valor ciptografado a variavel text apos converte o valor ascci para caractere
            text += char(len);
            cript(n + 1);
        }
        cript(0)
        //Função de descodificação
        //Loop feito atraves de recursão
        var decript = (n) => {
            if (n > dados.length) return;
            p--;
            len = ((asc(dados.substr(n, 1))) - (asc(chave.substr(p, 1))));
            if (p == chave.length) {
                p = 0;
            }
            // if (len < 0) {
            //     len += 256;
            // }
            if (len > 255) {
                len -= 256;
            }
            textD += char(len);
            decript(n + 1);
        };
        decript(0)
        //Variavel que busca local de saida no html
        var node = document.getElementById('output');
        //Adicionando variavel text a saida
        node.innerHTML = text
    };
    reader.readAsText(input.files[0]);
};