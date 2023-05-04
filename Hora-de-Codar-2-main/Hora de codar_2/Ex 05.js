//Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

let valores = [];

for (let i = 0; i < 6; i++) {
  valores.push(parseFloat(prompt(`Digite o ${i+1}º valor:`)));
}
let soma = 0;
for (let i = 0; i < valores.length; i++) {
  soma += valores[i];}
let media = soma / valores.length;
console.log(`Valores informados: ${valores.join(", ")}`);
console.log(`Média aritmética: ${media}`);