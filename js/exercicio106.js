function executarExercicio106() {
  alert(
    "106. Faça um programa que leia uma matriz 4x4 de números inteiros e exiba a soma dos elementos de cada coluna."
  );

  let mat = []; soma=[0, 0, 0, 0], resultado='', resultadoSoma=''

  for (let linha = 0; linha < 4; linha++) {
    mat[linha] = [];
    for (let coluna = 0; coluna < 4; coluna++) {
      mat[linha][coluna] = parseInt(
        prompt(
          "Matriz01:\nDigite o numero da linha " + linha + " e coluna " + coluna
        )
      );
    }
  }

  for (let coluna = 0; coluna < 4; coluna++) {
    for (let linha = 0; linha < 4; linha++) {
      soma[linha] += mat[coluna][linha] 
    }
  }

    for (let coluna = 0; coluna < 4; coluna++) {
      resultadoSoma += soma[coluna]+" "
    }

    for(let linha = 0; linha < 4; linha++) {
        for (let coluna = 0; coluna < 4; coluna++) {
            resultado+= mat[linha][coluna]+" "
        }
        resultado+="\n"
      }

      alert('Matriz:\n'+resultado+"\nSoma:"+resultadoSoma)

  

}
