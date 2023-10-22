function executarExercicio108(){
    alert(" 108. Crie um programa que leia uma matriz 3x3 de números inteiros e exiba o produto dos elementos da diagonal secundária.")

    let mat01 = [], resultado='', produto = 1

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

      for (let i = 0; i<3; i++) {
       produto*=mat01[i][2-i]  
      }

      for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            resultado += mat01[linha][coluna]+" "
        }
        resultado+="\n"
      }

      alert("matriz:\n"+resultado +"\n produto da diagonal secundaria:\n"+produto)
}