function executarExercicio97() {
    alert("97. Faça um programa que leia uma matriz 3x3 de números inteiros e exiba a matriz na tela.");

    let mat = [], resultado = ""

    for (let i = 0; i < 3; i++) {
        mat[i]=[]
        for (let j = 0; j < 3; j++) {
            mat[i][j] = parseInt(prompt("Digite o numero da linha " + i + " e coluna " + j))
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            resultado += mat[i][j] + " "
        }
        resultado+="\n"
    }

    alert(resultado);
}
