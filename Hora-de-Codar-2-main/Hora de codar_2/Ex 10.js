//Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas: 
//Formula:- para homens : (72.7*h) -(subtrai) 58 - para mulheres: (62.1*h) -(subtrai) 44.7
//  Observação: Altura = h ( na fórmula acima)
let altura = parseFloat(prompt("Digite sua altura em metros: "));
let sexo = parseInt(prompt("Digite seu sexo (1 para feminino, 2 para masculino): "));

let pesoIdeal;
if (sexo === 1) {
  pesoIdeal = (62.1 * altura) - 44.7;
} else if (sexo === 2) {
  pesoIdeal = (72.7 * altura) - 58;
} else {
  alert("Valor inválido para o sexo!");
}

if (pesoIdeal) {
  alert("Seu peso ideal é " + pesoIdeal.toFixed(2) + " kg.");
}
