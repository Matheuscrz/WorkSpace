// [EXEMPLO] Programa que lê o conteúdo de um arquivo de texto, exibe esse conteúdo no terminal e, A SEGUIR, realiza a próxima operação programada (no exemplo, a soma de dois valores quaisquer).
//Bibliotecas Node para ler arquivos
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

//Callback
const exibirConteudo = (_, conteudo) => 
    console.log(conteudo.toString())

console.log('=== INICIO da leitura do arquivo...')
fs.readFile(caminho, exibirConteudo)
console.log('=== FIM da leitura.\n')

console.log('=== INICIO de uma outra operação qualquer...')
const exec = (fn, a, b) => fn(a, b)
const somarNoTerminal = (x, y) => console.log(`Resultado: ${x + y}.`)
exec(somarNoTerminal, 56, 38)
console.log('=== FIM da outra operação.\n')