function executarExercicio100() {
  alert(
    "100. Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba a soma das duas matrizes."
  );

  let mat01 = [],
    mat02 = [],
    matSoma = [], 
    resultado=''

  for (let linha = 0; linha < 2; linha++) {
    mat01[linha] = [];
    for (let coluna = 0; coluna < 2; coluna++) {
      mat01[linha][coluna] = parseInt(
        prompt(
          "Matriz01:\nDigite o numero da linha " + linha + " e coluna " + coluna
        )
      );
    }
  }

  for (let linha = 0; linha < 2; linha++) {
    mat02[linha] = [];
    for (let coluna = 0; coluna < 2; coluna++) {
      mat02[linha][coluna] = parseInt(
        prompt(
          "Matriz02:\nDigite o numero da linha " + linha + " e coluna " + coluna
        )
      );
    }
  }

  for (let linha = 0; linha < 2; linha++) {
    matSoma[linha]=[]
    for (let coluna = 0; coluna < 2; coluna++) {
      matSoma[linha][coluna] = mat01[linha][coluna] + mat02[linha][coluna];
      resultado+=matSoma[linha][coluna]+" "
    }
    resultado+="\n"
  }

  alert("Matriz soma:\n"+resultado)
}
