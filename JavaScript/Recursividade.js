// var loop = (n) => {
//     if (n < 10) return
//     console.log(n);
//     loop(n + 1);
// };
// loop(1)
// var array = (n) => {
//   if (n == 0) return [];
//   return array(n - 1).concat([n]);
// };
// array(10)
// function array(n) {
//     if (n == 0)
//         return [];
//     return array(n - 1).concat([n]);
// }
// array(10)
// var loop = (n) => {
//     if (n > 10) return;
//     console.log(n);
//     loop(n + 1);
// }
// loop(1)
//Exemplo: Observe a sequência aritmética a seguir e crie um programa para encontrar o valor do n-ésimo elemento: {2,7,12,17,22,...}
const f = (n) => {
    if (n == 1) {
        return 2}
    else {
        return f(n - 1) + 5
    }
}
console.log(f(10))
//Ou
const i = (n) => (n==1) ? 2 : f(n-1) + 5
console.log(i(10))
//Exemplo: Lista 06,Q2 - N-ésimo número da sequência de Fibonacci
const fib = (n) => {
    if (n == 0) {
        return 0
    }
    else if (n == 1) {
        return 1
    }
    else return fib(n-1) + fib(n-2)
}
console.log(fib(25))
//Exemplo: adaptação da LIsta 06, Q6 - Implementar o operador de exponenciação para permitir calcular a potência de um número m qualquer.
const pot = (m,n) => {
    if (n == 0) {return 1} 
    else return m*pot(m,n-1)
}
console.log(pot(2,2))
//Exemplo: Lista 06, Q7- Implementar o operador de divisão a fim de encontrar o resto da divisão entre dois números positivos fornecidos, n e m.
const rest = (n,m) => n < m ? n : rest(n-m,m)
console.log(rest(31,5))
//Exemplo: Lista 06, Q10 - Implementar o operador de divisão a fim de encontrar o Máximo Divisor Comum(MDC) entre dois inteiros fornecidos, n e m.
const mdc = (n,m) => {
    if (n > m) return mdc(m,n)
    else if (n == 0) return m
    else return mdc (n, m - n)
}
console.log(mdc(12,18))