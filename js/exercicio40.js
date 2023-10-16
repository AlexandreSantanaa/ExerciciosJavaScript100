function executarExercicio40() {
  alert(
    "40.  Faça um programa que leia 5 números inteiros e exiba a média aritmética dos valores lidos."
  );

  let vetor = [];
  media = 0;
  for (let i = 0; i <= 4; i++) {
    vetor[i] = parseFloat(prompt("Digite o numero " + (i + 1)));
    media +=vetor[i]
  }

  media = media/vetor.length

  alert(media)
}
