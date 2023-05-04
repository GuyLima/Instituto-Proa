const valor = Number(prompt("Digite um valor: ")); // Lê um valor do usuário como um número

if (valor > 0) {
  document.write("O valor é positivo"); // Se o valor for maior que zero, exibe essa mensagem
} else if (valor < 0) {
    document.write("O valor é negativo"); // Se o valor for menor que zero, exibe essa mensagem
} else {
    document.write("O valor é zero"); // Se o valor for igual a zero, exibe essa mensagem
}