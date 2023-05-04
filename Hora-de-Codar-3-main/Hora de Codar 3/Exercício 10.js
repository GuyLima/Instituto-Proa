//Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.
let n = parseInt(prompt("Digite um número inteiro:"));

for (let i = 1; i <= n; i++) { 
  document.write("Tabuada do " + i + "<br>");
  for (let j = 1; j <= 10; j++) { 
    document.write(i + " x " + j + " = " + i*j + "<br>"); 
  }
  document.write("<br>"); 
}
