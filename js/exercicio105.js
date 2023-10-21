function executarExercicio105(){
    alert("105. Crie um programa que leia uma matriz 3x3 de números inteiros e verifique se ela é simétrica (igual à sua transposta).")

    let mat01=[],mat02=[], resultado01=0, resultado02=0, resposta=0

    for (let linha = 0; linha < 3; linha++) {
        mat01[linha] = [];
        for (let coluna = 0; coluna < 3; coluna++) {
          mat01[linha][coluna] = parseInt(
            prompt(
              "Matriz01:\nDigite o numero da linha " + linha + " e coluna " + coluna
            )
          );
        }
      }

      for (let linha = 0; linha < 3; linha++) {
        mat02[linha] = [];
        for (let coluna = 0; coluna < 3; coluna++) {
          mat02[linha][coluna] = parseInt(
            prompt(
              "Matriz02:\nDigite o numero da linha " + linha + " e coluna " + coluna
            )
          );
        }
      }

      for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
          resposta = (mat01[linha][coluna]==mat02[linha][coluna])?1:0
            resultado01 += mat01[linha][coluna]+" "
            resultado02 += mat02[linha][coluna]+" "
        }
        resultado01+="\n"
        resultado02+="\n"
      }

      (resultado01==resultado02)?alert(resultado01+"=\n"+resultado02):alert(resultado01+"diferente\n"+resultado02)
}