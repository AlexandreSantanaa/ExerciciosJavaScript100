function executarExercicio102(){
    alert("102. Crie um programa que leia uma matriz 4x4 de números inteiros e exiba a média aritmética dos elementos.")

    let mat=[], media=0, contadorElementos = 0, soma=0

    for(let linha=0;linha<4;linha++){
        mat[linha]=[]
        for(let coluna = 0; coluna<4; coluna++){
            mat[linha][coluna]=parseInt(prompt("Matriz01:\nDigite o numero da linha " + linha + " e coluna " + coluna))
            soma += mat[linha][coluna]
            contadorElementos++
        }
    }

    media = soma/contadorElementos

    alert("A media é: " + media )
}