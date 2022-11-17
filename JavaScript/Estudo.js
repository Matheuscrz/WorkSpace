// const prompt = require("prompt-sync")();
// const n = parseInt(prompt("Valor de n: "));
//n-ésimo termo
const f = (n) => (n == 1 ? 2 : f(n - 1) + 5);
//Potência
const potencia = (m, n) => {
  if (n == 0) return 1;
  else return m * pot(m, n - 1);
};
//Potência inteira
const potI = (m, n) => {
  if (n < 0) return 1 / potAux(m, n * -1);
  else return potAux(m, n);
};
const potAux = (m, n) => {
  if (n == 0) return 1;
  else return m * potAux(m, n - 1);
};
//-----------------------------------Lista 4--------------------------------------
//Questão 1
const nesimo = (n) => (n == 1 ? 3 : nesimo(n - 1) * 2);
//Questão 2
const Fibonacci = (n) => {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return Fibonacci(n - 1) + Fibonacci(n - 2);
};
//Questão 3
const somaN = (n) => {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return n + somaN(n - 1);
};
//Questão 4
const fat = (n) => {
  if (n == 0) return 1;
  else if (n == 1) return 1;
  else return n * fat(n - 1);
};
//Questão 5
const pot = (n) => {
  if (n == 0) return 1;
  else return 2 * pot(2, n - 1);
};
//Questão 6
const restante = (m, n) => (m < n ? m : resto(m - n, n));
//Questão 7
const quociente = (m, n) => (m < n ? 0 : 1 + quociente(m - n, n));
//Questão 8
const mdc = (n, m) => {
  if (n > m) return mdc(m, n);
  else if (n == 0) return m;
  else return mdc(n, m - n);
};
//Questão 9
const mmc = (n) => (m) => (n * m) / mdc(n, m);
//Questão 10
const tamanho = (str) =>
  str.charArt(0) === "" ? 0 : 1 + tamanho(str.slice(1));
//Questão 11
const multiSoma = (n, count = 10) => {
  if (count == 0) return 0;
  else return n * count + multiSoma(n, count - 1);
};
//Questão 12
const inverte = (str) =>
  str.charAt(0) == "" ? "" : inverte(str.slice(1)) + str.charAt(0);
//Questão 13
const somaQuadrados = (n) => (n == 0 ? 0 : n ** 2 + somaQuadrados(n - 1));
//Questão 14
const repita = (txt, n) => (n === 0 ? "" : txt + repita(txt, n - 1));
//Questão 15
const caminhos = (n) => (n === 1 ? 1 : n * caminhos(n - 1));
//Questão 16
const decPara = (base) => (n) => {
  const baseReg = { 2: "01", 8: "01234567", 16: "0123456789abcdef" };
  if (n < base) return baseReg[base][n];
  else {
    const quo = Math.floor(n / base);
    const resto = n % base;
    return decPara(base)(quo) + `${baseReg[base][resto]}`;
  }
};
//Questão 17
const collatz = (n) => {
  if (n === 1) return 0;
  else if (n % 2 === 0) return 1 + collatz(n / 2);
  else return 1 + collatz(n * 3 + 1);
};
//Questão 18
const palindromo = (txt) => {
  const preprocessa = (txt) => {
    if (txt === "") return "";
    //transforma em minúsculas
    const minusculas = txt.toLowerCase();
    //retira espaços
    const semespacos = minusculas.replace(/\s/g, "");
    //retira acentuação
    //obs: o método "normalize" serve para converter
    //uma string no seu formato padrão Unicode.
    //Neste caso, utilizamos o parâmetro NFD que pode
    //separar os acentos das letras e devolver os seus códigos Unicode.
    const semacentos = semespacos
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    //retira os demais caracteres que não são letras
    const letras = semacentos.match(/[a-z]/g).join("");
    return letras;
  };
  const helper = (txt) => {
    if (txt.length < 2) return true;
    else if (txt[0] !== txt.slice(-1)) return false;
    else return helper(txt.slice(1, -1));
  };
  const txtlimpo = preprocessa(txt);
  return helper(txtlimpo);
};
//Questão 19
const ndigitospermut = (n) => {
  const ndigitos = (n) => {
    //quando n é muito grande (o que é usual ao se aplicar o fatorial),
    //JS representa o inteiro na notação científica (ex: 1.345e+25),
    //o que muda o algoritmo para contar o número de dígitos: nesse caso,
    //transformo em string, identifico a posição do caracter '+' e
    //retorno o número que vem a seguir do '+' adicionado de 1; esse
    //é exatamente a quantidade de dígitos.
    const str = n.toString();
    const pos = str.search(/\+/);
    if (pos > -1) return 1 + parseInt(str.slice(pos));
    //Para números não tão gigantescos, aplicamos a lógica algoritma
    //recursiva usual para contar o número de dígitos.
    else if (n < 10) return 1;
    else return 1 + ndigitos(parseInt(n / 10));
  };
  const fat = (n) => (n === 0 ? 1 : n * fat(n - 1));
  return ndigitos(fat(n));
};
//Questão 20
const deslocaDir = (bits) => (num) => {
  if (bits == 0) return num;
  if (bits == 1) return Math.floor(num / 2);
  else return deslocaDir(bits - 1)(Math.floor(num / 2));
};
//----------------------------------- Fim ---------------------------------------
const indef = (x) => typeof x == "undefined";
const elem = (e, [x, ...xs]) => {
  if (indef(x)) {
    return false;
  } else return e === x || elem(e, [...xs]);
};
const inverta = ([x, ...xs]) => (indef(x) ? [] : [...inverta(xs), x]);
const duplica = ([x, ...xs]) => (indef(x) ? [] : [x, x, ...duplica(xs)]);
const palin = (str) => {
  if (str.length < 2) return true;
  else {
    let prim = str.slice(0, 1);
    let ult = str.slice(-1);
    let meio = str.slice(1, -1);
    return prim === ult && palin(meio);
  }
};
//---------------------------------- Lista 5--------------------------------------
//Questão 1
//Questão 2
const ultimo = ([x, ...xs]) => {
  if (indef(x)) return "Lista vazia";
  else return ultimoAux([x, ...xs]);
};
const ultimoAux = ([x, ...xs]) => {
  if (xs.length == 0) return x;
  else return ultimoAux(xs);
};
//Questão 3
const numero = ([x, ...xs]) => {
  if (indef(x)) return 0;
  else return 1 + numero(xs);
};
//Questão 4
// const presente = (l) => (x) => l.indexOf(x) != -1;
// const compara = (l1, l2) => l1.filter(presente(l2));
// const quantosIguais = compara(lista1, lista2).length;
//---------------------------------- Lista 7--------------------------------------
/**
 *
 * Importa funções auxiliares
 */
const { indef } = require("./utils.js");

/**
 * Criar uma função que busca o índice de um determinado item
 * em uma lista ORDENADA. Se o item estiver presente, ele deve
 * retornar o índice, caso contrário, deve retornar -1.
 * #recursividade
 * #lista
 */
const busca = ([x, ...xs], elem, acc = 0) => {
  if (indef(x)) return -1;
  else if (elem === x) return acc;
  else return busca(xs, elem, acc + 1);
};

/**
 * Criar uma função que encontre o maior valor
 * numa lista de inteiros usando a recursividade.
 * Considere que a lista possui pelo menos um elemento.
 */
const maior = ([x, y, ...xs]) => {
  if (indef(y)) return x;
  else return x > y ? maior([x, ...xs]) : maior([y, ...xs]);
};

/**
 * Criar uma função que pega uma lista e devolve a soma de
 * todos os itens. Atenção: o item de uma lista pode ser outra lista.
 */
const somaAninhado = ([x, ...xs]) => {
  if (indef(x)) return 0;
  else if (!(x instanceof Array)) return x + somaAninhado(xs);
  else return somaAninhado(x) + somaAninhado(xs);
};

/**
 * Função para retornar o número de vogais numa string.
 * Considere que todas as letras estão minúsculas.
 */
const vogais = (str) => {
  const helper = ([x, ...xs]) => {
    if (indef(x)) return 0;
    //testa se alguma das letras a,e,i,o,u existe em (corresponde a) x
    else if (/[aeiou]/.test(x)) return 1 + helper(xs);
    else return helper(xs);
  };
  if (str === "") return 0;
  else return helper(str.split(""));
};

/**
 * Criar uma função que transforma frases terminadas com múltiplos pontos
 * de interrogação ? ou pontos de exclamação ! numa frase que termina apenas
 * com um, sem alterar a pontuação no meio das frases.
 * Ex: semgritaria("O que é isso?????") ---> "O que é isso?"
 */
const eliminaIntExc = (str) => {
  const helper = ([x, y, ...xs]) => {
    if (x !== y) return [x, y, ...xs];
    else if (/[?!]/.test(x)) return helper([y, ...xs]);
    else return [x, y, ...xs];
  };
  if (str.length <= 2) return str;
  const strinvertida = inverte(str);
  if (!/[!?]/.test(strinvertida[1])) return str;
  else {
    const strlista = strinvertida.split("");
    return inverte(helper(strlista).join(""));
  }
};
//Questão 6
const acumulado = ([x, ...xs], acc = 0) => {
  if (indef(x)) return [];
  else {
    const novox = x + acc;
    return [novox, ...acumulado([...xs], novox)];
  }
};
//QUICK SORT
const qSort = ([x, ...xs]) => {
  if (indef(x)) return [];
  else {
    const menores = xs.filter((a) => a <= x);
    const maiores = xs.filter((a) => a > x);
    return [...qSort(menores), x, ...qSort(maiores)];
  }
};

//Versão convencional
const elimina =
  (elem) =>
  ([x, ...xs]) => {
    if (indef(x)) return [];
    else if (x === elem) return elimina(elem)([...xs]);
    else return [x, ...elimina(elem)([...xs])];
  };
//Versão convencional
const sublista = (lista) => (str) => {
  const sublistaAux = ([x, ...xs], [y, ...ys]) => {
    if (indef(y)) return true;
    else if (indef(x)) return false;
    else if (y === x) return sublistaAux(xs, ys);
    else return sublistaAux(xs, [y, ...ys]);
  };
  const strsplit = str.split("");
  return sublistaAux(lista, strsplit);
};
const digitosoma = (valor) => {
  const converteEmLista = (v) => {
    if (v < 10) return [v];
    else return converteEmLista(parseInt(v / 10)).concat([v % 10]);
  };
  const parcial = sum(converteEmLista(valor));
  if (parcial < 10) return parcial;
  else return digitosoma(parcial);
};
const criaLances = (num) => {
  const face1 = 1 + Math.floor(Math.random() * 6);
  const face2 = 1 + Math.floor(Math.random() * 6);
  if (num === 1) return [[face1, face2]];
  else return [[face1, face2]].concat(criaLances(num - 1));
};
const map__ =
  ([x, ...xs]) =>
  (f) => {
    if (indef(x)) return [];
    else return [f(x), ...map__(xs)(f)];
  };
const filter__ =
  ([x, ...xs]) =>
  (f) => {
    if (indef(x)) return [];
    else if (f(x)) return [x, ...filter__(xs)(f)];
    else return [...filter__(xs)(f)];
  };
const reduce__ =
  ([x, ...xs]) =>
  (f, acc) => {
    if (indef(x)) return acc;
    else return reduce__(xs)(f, f(x, acc));
  };
//---------------------------------- Simulado--------------------------------------
/**
 * QUESTÃO 1
 */
const truncaSeq = (lista, n = 0) => {
  if (n === 0) return lista;
  else if (n >= lista.length) return [];
  else {
    const [x, ...xs] = lista;
    return [x, ...truncaSeq(xs, n)];
  }
};

/**
 * QUESTÃO 2
 */
const validaSeq = (lista) => {
  if (lista.length < 3) return true;
  else {
    const [x, y, z, ...xs] = lista;
    if (x + y === z) return validaSeq([y, z, ...xs]);
    else return false;
  }
};

/**
 * QUESTÃO 3
 */
const mantenhaFiltro = (f) => (lista) => {
  if (lista.length === 0) return [];
  else {
    const [x, ...xs] = lista;
    if (f(x)) return [x, ...mantenhaFiltro(f)(xs)];
    else return [];
  }
};

/**
* QUESTÃO 4

*/
const bin2dec = (str) => {
  const lista = str.split("");
  const len = str.length;
  const helper = ([x, ...xs], tam) => {
    if (tam === 0) return 0;
    else return x * 2 ** (tam - 1) + helper(xs, tam - 1);
  };
  return helper(lista, len);
};

console.log();
