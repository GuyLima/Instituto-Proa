//Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
//N  é um valor informado pelo usuário
let n = parseInt(prompt("Digite um número inteiro maior que zero:"));

for (let i = 1; i <= n; i++) {
  document.write(i + "<br>");
}
