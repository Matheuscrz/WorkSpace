const readline = require('readline'); //importação de funções
const Snake    = require('./snake') //Importação do arquivo snake.js
const base     = require('./base') //Importação do arquivo base.js
Object.getOwnPropertyNames(base).map(p => global[p] = base[p]) //Funções de apoio
/*Alunos: Álefe Freire Santos, Kleverton Santos Souza, Marcio Henrique Matos de Freitas, Matheus Lima da Cruz e Ricacio Souza de Jesus
  Grupo: F
Define o quão rápido a cobra será, modificando o valor  da função (vel),
let State = Snake.initialState() // Estado inicial do jogo, aqui o estado pega a função de iniciar.

// Operações da matriz de jogo
const Matrix = { // Operações da matriz de jogo, aonde definimos a criação visual de todo jogo, como tamanho iterável, ícones e etc.
  make:      table => rep(rep('.')(table.cols))(table.rows), // Cria uma matriz de de x colunas representadas por '.' e x tamanho
  set:       val   => pos => adjust(pos.y)(adjust(pos.x)(k(val))), // Define um valor em uma posição da matriz, recebendo um valor como índice uma posição e aplicando a o dicionario passado no índice determinado. 
  addSnake:  state => pipe(...map(Matrix.set('*'))(state.snake)), // Adiciona a cobra na matriz do jogo, representada por 'C', utilizando a função set auxiliar para definir a posição.
  addApple:  state => Matrix.set('o')(state.apple), // Adiciona a maçã na matriz de jogo, representada por 'o', utilizando a função set como auxiliar para definir a posição na matriz.
  addApple2: state => Matrix.set('o')(state.apple2), // Adiciona a fenda, que sera representada por 'o'
  addveneno: state => Matrix.set('v')(state.veneno), // Adiciona o veneno, que sera representado por 'v'
  addcont: state => Matrix.set(state.cont)({x:0,y:0}), // Adiciona o contador na posição 1 da matriz ou (0,0)
  addCrash:  state => state.snake.length == 0 ? map(map(k('#'))) : id, // se o estado da cobra, for zero, adiciona '#' em todos elementos da matriz, indicando que você perdeu
  toString:  xsxs  => xsxs.map(xs => xs.join(' ')).join('\r\n'), // Converte a matriz em uma string
  fromState: state => pipe( // Converte o estado em uma matriz, utilizando pipe para efetuar a junção de todo conjunto de funções
    Matrix.make, // Cria a matriz(colunas e linhas)
    Matrix.addSnake(state), // Adiciona a cobra
    Matrix.addApple(state), // Adiciona a maçã
    Matrix.addApple2(state), // Adiciona a maçã2(fenda)
    Matrix.addveneno(state),// Adiciona o veneno
    Matrix.addcont(state),// Adiciona o contador
    Matrix.addCrash(state), // Adiciona o crash
  )(state) // Retorna a matriz
}

// Eventos do teclado
readline.emitKeypressEvents(process.stdin); //Leitura do teclado, efetuando a ação correspondente ao evento pressionado.
process.stdin.setRawMode(true); //Verificando se o teclado foi pressionado, verificando se o valor e verdadeiro.
process.stdin.on('keypress', (str, key) => { //Função que executa a ação correspondente ao evento pressionado
  if (key.ctrl && key.name === 'c') process.exit() //Função que finaliza o jogo, se você aperta ctrl + c finaliza o processo do jogo.
  switch (key.name.toUpperCase()) { //Função que executa a ação correspondente ao evento pressionado.
    case 'W': case 'K': case 'UP':    State = Snake.enqueue(State, Snake.NORTH); break //Se você apertar W K ou UP no teclado, a cobra se move para o norte(cima).
    case 'A': case 'H': case 'LEFT':  State = Snake.enqueue(State, Snake.WEST);  break //Se você apertar A H ou LEFT no teclado, a cobra se move para oeste(esquerda).
    case 'S': case 'J': case 'DOWN':  State = Snake.enqueue(State, Snake.SOUTH); break //Se você apertar S J ou DOWN no teclado, a cobra se move para sul (baixo).
    case 'D': case 'L': case 'RIGHT': State = Snake.enqueue(State, Snake.EAST);  break //Se você apertar D L ou RIGHT no teclado, a cobra se move para leste(direita).
  }
});

/**
 * LAÇO PRINCIPAL DO JOGO
 */

const show = () => console.log('\x1Bc' + Matrix.toString(Matrix.fromState(State))) //Função que printa o jogo no console, pegando dados da matriz e o estado atual para atualização
const step = () => State = Snake.next(State) //Função que atualiza cada estado do jogo

const vel = (v=3) => { //Função que define a velocidade do jogo
    switch (v) { //Pega um valor passado a v e devolve a velocidade do caso escolhido
        case 1: return 250; break; 
        case 2: return 200; break;
        case 3: return 150; break;
        case 4: return 100; break;
        case 5: return 50; break;
        default: return 150; break;
    }
}

setInterval(() => { step(); show() }, vel(2)) //vel(1) to vel(5); default = vel(3) Define o quão rápido a cobra será, modificando o valor  da função (vel),
