//Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 
let notas = []; 
let soma = 0; 

for (let i = 1; i <= 6; i++) {
  let nota;

  do {
    nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
  } while (nota < 0 || nota > 10);

  notas.push(nota); 
  soma += nota; 
}

let media = soma / notas.length; 

document.write("A média final do aluno é: " + media.toFixed(2));
