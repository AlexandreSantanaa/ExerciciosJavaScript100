function executarExercicio107(){
    alert("107. Escreva um programa que leia duas matrizes 2x2 de números inteiros e verifique se elas são iguais. ")

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

      
}