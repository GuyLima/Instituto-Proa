// Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.
let dentroIntervalo = 0;
let foraIntervalo = 0;

for (let i = 1; i <= 10; i++) {
  let valor = parseInt(prompt("Digite o " + i + "º valor:"));
  if (valor >= 24 && valor <= 42) {
    dentroIntervalo++;
  } else {
    foraIntervalo++;
  }
}

document.write("Quantidade de valores dentro do intervalo [24, 42]: " + dentroIntervalo + "<br>");
document.write("Quantidade de valores fora do intervalo [24, 42]: " + foraIntervalo + "<br>");
