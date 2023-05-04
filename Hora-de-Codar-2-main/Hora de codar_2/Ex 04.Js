let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));
let valor3 = parseInt(prompt("Digite o terceiro valor: "));

if (valor1 > valor2 && valor1 > valor3) {
  if (valor2 > valor3) {
    console.log("A soma dos dois maiores valores é: " + (valor1 + valor2));
  } else {
    console.log("A soma dos dois maiores valores é: " + (valor1 + valor3));
  }
} else if (valor2 > valor1 && valor2 > valor3) {
  if (valor1 > valor3) {
    console.log("A soma dos dois maiores valores é: " + (valor2 + valor1));
  } else {
    console.log("A soma dos dois maiores valores é: " + (valor2 + valor3));
  }
} else {
  if (valor1 > valor2) {
    console.log("A soma dos dois maiores valores é: " + (valor3 + valor1));
  } else {
    console.log("A soma dos dois maiores valores é: " + (valor3 + valor2));
  }
}