const base = require('./base') // Importação do base.js
Object.getOwnPropertyNames(base).map(p => global[p] = base[p]) // Exportação de funções de apoio

// Constantes de movimentação, estas constantes respeitam o principio da imutabilidade
const NORTH = { x: 0, y:-1 } // Movimentação a o norte(para cima), a cobra se move para o eixo y ...
const SOUTH = { x: 0, y: 1 } // Movimentação para o sul(baixo),a cobra se move positivamente em relação ao eixo y...
const EAST  = { x: 1, y: 0 } // Movimentação para o leste(direita)
const WEST  = { x:-1, y: 0 } // Movimentação para o oeste(esquerda)

const pointEq = p1 => p2 => p1.x == p2.x && p1.y == p2.y // Função de comparação de pontos

// Funções de ações
const willEat   = state => pointEq(nextHead(state))(state.apple) // A função recebe um estado e compara usando a função auxiliar pointEq, 'Se comer a maçã retorna true'
const willEat2 = state => pointEq(nextHead(state))(state.apple2) // Criamos essa função que devolve verdade se comer a maçã 2
const willCrash = state => state.snake.find(pointEq(nextHead(state))) // Recebe um estado utiliza o 'find para pegar apenas a cabeça e comparar 'Se a cabeça colidir com a cauda retorna true'
const willven  = state => pointEq(nextHead(state))(state.veneno) // Criei essa função para verdade se comer o veneno
const validMove = move => state => // Função de validação de movimento 
  state.moves[0].x + move.x != 0 || state.moves[0].y + move.y != 0 // Se o movimento for diferente de 0,0 retorna true

// Próximos valores baseados no estado atual
const nextMoves = state => state.moves.length > 1 ? dropFirst(state.moves) : state.moves // Próximos movimentos baseados no estado atual, recebe um estado vé se o tamanho é maior que um, caso seja ele pegar toda lista sem o primeiro elemento,caso contrario devolve o mesmo estado 
const nextApple = state => willEat(state) ? rndPos(state) : state.apple // Próxima maçã baseado no estado atual, recebe um estado usa a função auxiliar willeat para caso tenha comido a maça mude a posição da maçã para uma posição aleatória usando o rndpos, caso contrario manter a mesma posição da maça
const nextApple2 = state => willEat(state) || willEat2(state) ? rndPos(state) : state.apple2 // Adicionamos uma fenda(ou uma segunda maçã), que sera representada por uma maça, so que falsa, se a maça verdadeira ou falsa forem comidas, ela sera mudada para uma posição aleatória, se nao permanece no mesmo lugar.
const nextveneno = state => willEat(state) || willEat2(state) ? rndPos(state) : state.veneno // Adicionamos o veneno, que ao jogador tocar, perdera o jogo.
const nextcont  = state => willEat(state) ? somalist(state.cont) : (state.snake.length == 0) ? 0 :  state.cont // Adicionei o contador de pontos
const nextHead  = state => state.snake.length == 0 // Próxima cabeça baseado no estado atual, compara se a cobra tem tamanho vazio caso tenha, ela sera gerada na posição x e y(utilizada para definir a onde a cobra vai ser gerada no começo do jogo)
  ? { x: 2, y: 2 } 
  : {
    x: mod(state.cols)(state.snake[0].x + state.moves[0].x), // Módulo de colunas
    y: mod(state.rows)(state.snake[0].y + state.moves[0].y) // Módulo de linhas
  }
const nextSnake = state => willCrash(state) // Usar a função auxiliar willcrash para comparar se a cabeça colidiu com o corpo e retorna true
  ? [] //Então ele devolve uma lista vazia indicando que a cobra reiniciara seu estado, indicando que o jogador perdeu
  : willven(state) ? [] //compara se  a cobra comeu o veneno, caso ela tenha comido, indica que o jogador perdeu
  : (willEat(state) // Se comer a maçã retorna true
    ? [nextHead(state)].concat(state.snake) // Concatena a cabeça com a cauda
    : (willEat2(state)) ? dropFirst(state.snake) // Caso a cobra coma a fenda ela sera diminuída 1 do seu corpo
    : [nextHead(state)].concat(dropLast(state.snake)))

// Aleatoriedade
const rndPos = table => ({ // Função de posição aleatória
  x: rnd(0)(table.cols - 1), // Gera o x da matriz aleatório base na coluna do estado
  y: rnd(0)(table.rows - 1) // Gera o y da matriz aleatório com base na linha do estado
})

// Estado inicial, esta função respeita o principio da imutabilidade e não altera o estado atual
const initialState = () => ({ // Função de estado inicial
  cols:  18, // Gera a quantidade colunas da matriz(adicionei mais colunas e linhas para o jogo ficar mais dinâmico) 
  rows:  16, // Gera a quantidade de linhas da matriz
  moves: [EAST], // A cobrinha começa se movendo para o lado direito da tela
  snake: [],
  apple: { x: 16, y: 2 }, // Coordenadas da primeira maçã
  apple2:{x: 10, y: 1}, // Coordenadas da primeira fenda(maçã falsa)
  veneno: {x: 10, y: 1},// Coordenadas do primeiro veneno
  cont: 0 // estado inicial do contador
})

const next = spec({ // Função de próximo estado, esta função aplica o principio de Alta Ordem
  rows:  prop('rows'), // Matem linhas da matriz no mesmo lugar
  cols:  prop('cols'), // Matem colunas da matriz no mesmo lugar
  moves: nextMoves, // Atualiza o estado do movimento, para o passado pelo o usuário (meio do teclado)
  snake: nextSnake, // Atualiza o estado cobra(exemplo ela ta maior)
  apple: nextApple, // Atualiza o estado da maçã
  apple2: nextApple2, // Atualiza a fenda
  veneno: nextveneno, // Atualiza o veneno
  cont: nextcont // Atualiza o contador
})

const enqueue = (state, move) => validMove(move)(state) // Função de fila de movimentos 
  ? merge(state)({ moves: state.moves.concat([move]) }) // Concatena o movimento com a fila de movimentos
  : state

module.exports = { EAST, NORTH, SOUTH, WEST, initialState, enqueue, next, } // Exportação de funções
