//Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
let aprovados = 0;

do {
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));

  let media = (nota1 + nota2) / 2;

  if (media >= 9.5) {
    aprovados++; 
  }

  document.write("A média final do aluno é: " + media + "<br>");

  let resposta = prompt("Calcular a média de outro aluno? (S/N)");
} while (resposta.toUpperCase() === "S");

document.write("Quantidade de alunos aprovados: " + aprovados);
