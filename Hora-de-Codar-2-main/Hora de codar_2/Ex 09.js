//Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).
// Lê o ano de nascimento da pessoa
const anoDeNascimento = parseInt(prompt("Digite o ano em que você nasceu:"));

const idade = new Date().getFullYear() - anoDeNascimento;

let podeVotar = false;
if (idade >= 18) {
  podeVotar = true;
}

if (podeVotar) {
  console.log("Você pode votar este ano!");
} else {
  console.log("Você não pode votar este ano.");
}
