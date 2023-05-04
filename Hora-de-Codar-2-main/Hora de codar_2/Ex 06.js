// Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

let valor1 = prompt("Digite o primeiro valor:");
let valor2 = prompt("Digite o segundo valor:");
let valor3 = prompt("Digite o terceiro valor:");
let valor4 = prompt("Digite o quarto valor:");
let maiorValor = valor1;
if (valor2 > maiorValor) {
  maiorValor = valor2;
}

if (valor3 > maiorValor) {
  maiorValor = valor3;
}

if (valor4 > maiorValor) {
  maiorValor = valor4;
}
console.log("Primeiro valor: " + valor1);
console.log("Último valor: " + valor4);
console.log("Maior valor: " + maiorValor);
