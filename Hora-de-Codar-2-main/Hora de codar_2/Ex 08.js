//Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));
let num4 = parseFloat(prompt("Digite o quarto número: "));

if (num1 >= 0 && num1 <= 10 && num2 >= 0 && num2 <= 10 && num3 >= 0 && num3 <= 10 && num4 >= 0 && num4 <= 10) {
  let media = (num1 + num2 + num3 + num4) / 4;
  if (media > 5) {
    console.log("Você passou no teste");
  } else {
    console.log("Tente novamente");
  }
} else {
  console.log("Digite apenas números entre 0 e 10");
}
