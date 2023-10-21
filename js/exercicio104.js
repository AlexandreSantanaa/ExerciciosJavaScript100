function executarExercicio104() {
  alert(
    "104. Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o menor valor presente na matriz."
  );

  let mat = [], menor=Number.NEGATIVE_INFINITY, resultado = 0

  for (let linha = 0; linha < 3; linha++) {
    mat[linha] = [];
    for (let coluna = 0; coluna < 3; coluna++) {
      mat[linha][coluna] = parseInt(
        prompt(
          "Matriz01:\nDigite o numero da linha " + linha + " e coluna " + coluna
        )
      );

      menor = (linha==0 && coluna==0)?
      mat[linha][coluna]:
      (mat[linha][coluna]<menor)? 
      mat[linha][coluna]: 
      menor;
    }
  }

  for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
      resultado += mat[linha][coluna]+" "
    }
    resultado+="\n"
  }

  alert(resultado +"\n o menor numero é: " + menor)

}
