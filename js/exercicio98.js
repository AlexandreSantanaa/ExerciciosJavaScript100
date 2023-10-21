function executarExercicio98(){
    alert("98.  Escreva um programa que leia uma matriz 2x2 de números inteiros e calcule a soma de todos os elementos.")

    let mat=[], resultado = "", soma=0

    for( let linha = 0; linha<2; linha++){
        mat[linha]=[]
        for(let coluna=0; coluna<2; coluna++){
            mat[linha][coluna]=parseInt(prompt("Digite o numero da linha " + linha + " e coluna " + coluna))
        }
    }

    for( let linha = 0; linha<2; linha++){
        for(let coluna=0; coluna<2; coluna++){
            resultado += mat[linha][coluna] + " "
            soma += mat[linha][coluna]
        }
        resultado+="\n"
    }
    
    alert("matriz:\n"+resultado+"-------\n"+"soma:"+soma)
    
}