let tempo = 30;

function atualizarTela() {
  document.write(tempo);

  tempo--;

  if (tempo < 0) {
    document.write("EXPLOSÃO");
  } else {
    setTimeout(atualizarTela, 1000);
  }
}

atualizarTela();
