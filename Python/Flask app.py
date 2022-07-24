from flask import Flask
app = Flask(__name__)
@app.route("/")
def home():
    return """
    <head>
        <link href="Body.css" rel="stylesheet" type="text/css">
        <title>Trabalho 1 - PF 2022.1</title>
        <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
    </head>

    <body class="bg">
        <h1>COMP0393 - PROGRAMAÇÃO FUNCIONAL</h1>
        <h2>TRABALHO 1 - Codificador de Texto</h2>
        <h3>Turma 01</h3>
        <h3>Equipe</h3>
        <ol>
            <li>Matheus Lima da Cruz</li>
        </ol>
        <h2>Leitura do arquivo original</h2>
        <input type='file' name='inputfile' id='inputfile' accept='text' onchange='openFile(event)'>
        <br>

        <h2>Texto codificado</h2>
        <pre id="output"></pre>

        <script type="text/javascript" src="Codificado.js">
        </script>

    </body>
    """
if __name__=='__main__':
    app.run(debug=True)