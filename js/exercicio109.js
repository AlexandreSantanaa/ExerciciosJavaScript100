function executarExercicio109() {
  alert(
    "109. Faça um programa que leia uma matriz 4x4 de números inteiros e exiba o maior valor presente em cada linha."
  );

  let mat = [],
    matMaior = [];

  for (let i = 0; i < 4; i++) {
    mat[i] = [];
    for (let j = 0; j < 4; j++) {
      mat[i][j] = parseInt(
        prompt("Matriz01:\nDigite o numero da linha " + i + " e coluna " + j)
      );
    }
  }

  for (let i = 0; i < 4; i++) {
    maiorLinha = mat[i][0];
    for (let j = 0; j < 4; j++) {
      maiorLinha = maiorLinha > mat[i][j] ? maiorLinha : mat[i][j];
    }
    matMaior.push(maiorLinha);
  }

  for (let i = 0; i < 4; i++) {
    console.log("Maior valor na linha " + i + ": " + matMaior[i]);
  }
}
