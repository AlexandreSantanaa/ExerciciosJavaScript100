function executarExercicio101(){
    alert("101. Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o maior valor presente na matriz.")

    let mat = [], maior=Number.NEGATIVE_INFINITY;

    for(let linha=0;linha<3;linha++){
        mat[linha]=[]
        for(let coluna = 0; coluna<3; coluna++){
            mat[linha][coluna]=parseInt(prompt("Matriz01:\nDigite o numero da linha " + linha + " e coluna " + coluna))
            maior = (mat[linha][coluna]>maior)?mat[linha][coluna]:maior
        }
    }

   
    alert("O maior numero é:" + maior)
}