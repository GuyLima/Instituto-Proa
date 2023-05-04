//Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

let soma = 0;
let quantidade = 0;

let menor = num1;
let maior = num2;
if (num2 < num1) {
  menor = num2;
  maior = num1;
}

for (let i = menor; i <= maior; i++) {
  soma += i;
  quantidade++;
}

let media = soma / quantidade;

document.write("A média aritmética é: " + media + "<br>");
document.write("Os números somados são: ");
for (let i = menor; i <= maior; i++) {
  document.write(i + ", ");
}
