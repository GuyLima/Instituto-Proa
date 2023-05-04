// Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.
let soma = 0;

let numeros = [];

for (let i = 1; i <= 6; i++) {
  let numero = Number(prompt("Digite o " + i + "º número:"));

  numeros.push(numero);

  if (numero < 72) {
    soma += numero;
  }
}

console.log("Soma dos números inferiores a 72: " + soma);
console.log("Valores informados pelo usuário: " + numeros.join(", "));
