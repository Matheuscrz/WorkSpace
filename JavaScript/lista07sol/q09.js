const { log, indef } = require("./utils.js");

//Uso de indef para testar lista vazia e operador spread para
//deixar mais claro o padrão de recursividade em listas

//Versão convencional
const elimina =
  (elem) =>
  ([x, ...xs]) => {
    if (indef(x)) return [];
    else if (x === elem) return elimina(elem)([...xs]);
    else return [x, ...elimina(elem)([...xs])];
  };

//Versão prototype
Array.prototype.elimina_ = function (elem) {
  const [x, ...xs] = this;
  if (indef(x)) return [];
  else {
    if (x === elem) return [...xs].elimina_(elem);
    else return [x].concat([...xs].elimina_(elem));
  }
};

//EXEMPLOS DE TESTE
const lista = [-4, 0, 3, 3, 11, 15, 3, 1];
const elem = 3;
log(`Resultado: ${lista.elimina_(elem)}`);
log(`Resultado: ${elimina(elem)(lista)}`);
