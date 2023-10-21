function executarExercicio103() {
  alert(
    "103. Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba o produto entre elas."
  );

  let mat01 = [],
    mat02 = [],
    matMultiplicacao = [],
    resultado01 = "",
    resultado02 = "",
    resultadoMultiplicacao = "";

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

  for (let linha01 = 0; linha01 < 2; linha01++) {
    matMultiplicacao[linha01] = [];
    for (let coluna01 = 0; coluna01 < 2; coluna01++) {
      matMultiplicacao[linha01][coluna01] = 0;
      for(let i=0; i<2; i++)
      matMultiplicacao[linha01][coluna01] += mat01[linha01][i] * mat02[i][coluna01];
    }
  }

  for (let linha = 0; linha < 2; linha++) {
    for (coluna = 0; coluna < 2; coluna++) {
      resultado01 += mat01[linha][coluna] + " ";
      resultado02 += mat02[linha][coluna] + " ";
      resultadoMultiplicacao += matMultiplicacao[linha][coluna] + " ";
    }
    resultado01 += " " + "\n";
    resultado02 += " " + "\n";
    resultadoMultiplicacao += " " + "\n";
  }

  alert(resultado01 + " *\n" + resultado02 + " =\n " + resultadoMultiplicacao);
}
