//Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.
let valor1 = prompt("Informe o primeiro valor:");
let valor2 = prompt("Informe o segundo valor:");

while (valor2 <= 0) {
  valor2 = prompt("O segundo valor deve ser maior que zero. Por favor, informe um novo valor:");
}

let resultado = valor1 / valor2;

console.log("O resultado da divisão é: " + resultado);
