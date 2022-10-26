const { log } = require("./utils.js");

//VERSÃO 1: COM FUNÇÃO DE INTERFACE, MANUTENÇÃO DA LISTA ORIGINAL
//E ALTERAÇÃO DOS CONTROLES DE INÍCIO E FIM
Array.prototype.buscabin = function (elem) {
  const ini = 0;
  const fim = this.length - 1;

  const buscabinAux = (ini, fim) => {
    if (ini > fim) return -1;
    const meio = Math.floor((ini + fim) / 2);
    if (elem === this[meio]) return meio;
    else if (elem < this[meio]) return buscabinAux(ini, meio - 1);
    else return buscabinAux(meio + 1, fim);
  };
  return buscabinAux(ini, fim);
};

//VERSÃO 2: USO DE SUBLISTAS CADA VEZ MENORES E
//USO DE NaN QUANDO NÃO ENCONTRADO
Array.prototype.buscabin2 = function (elem) {
  const meio = parseInt(this.length / 2);
  if (elem === this[meio]) return meio;
  else if (meio === 0) return NaN;
  else if (elem < this[meio]) return this.slice(0, meio).buscabin2(elem);
  else return meio + this.slice(meio, this.length).buscabin2(elem);
};

//EXEMPLOS DE TESTE
const lista = [-4, 0, 3, 7, 11, 15];
const elem = 7;
log(
  `[Versão 1] Posição de ${elem} na lista [${lista}]: ${lista.buscabin(elem)}`
); //versão 1
log(
  `[Versão 2] Posição de ${elem} na lista [${lista}]: ${lista.buscabin2(elem)}`
); //versão 2
