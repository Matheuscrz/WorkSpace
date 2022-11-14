const prompt = require("prompt-sync")();
const n = parseInt(prompt("Valor de n: "));
//n-ésimo termo
const f = (n) => (n == 1 ? 2 : f(n - 1) + 5);
//Fibonacci
const fib = (n) => {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return fib(n - 1) + fib(n - 2);
};
//Potência
const pot = (m, n) => {
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
//Resto de divisão
const resto = (m, n) => (m < n ? m : resto(m - n, n));
//mdc
const mdc = (n, m) => {
  if (n > m) return mdc(m, n);
  else if (n == 0) return m;
  else return mdc(n, m - n);
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
const potencia2 = (n) => {
  if (n == 0) return 1;
  else return 2 * potencia2(n - 1);
};
//Questão 6
const restante = (m, n) => (m < n ? m : resto(m - n, n));
//Questão 7
//Questão 10
const tamanho = (t) => {};
console.log();
