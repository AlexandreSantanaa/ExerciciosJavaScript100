function executarExercicio107(){
    alert("107. Escreva um programa que leia duas matrizes 2x2 de números inteiros e verifique se elas são iguais. ")

    let mat01=[],mat02=[], resultado01=0, resultado02=0, resposta=0

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
        for (let coluna = 0; coluna < 2; coluna++) {
          resposta = (mat01[linha][coluna]==mat02[linha][coluna])?1:0
            resultado01 += mat01[linha][coluna]+" "
            resultado02 += mat02[linha][coluna]+" "
        }
        resultado01+="\n"
        resultado02+="\n"
      }

      (resultado01==resultado02)?alert(resultado01+"=\n"+resultado02):alert(resultado01+"diferente\n"+resultado02)
}