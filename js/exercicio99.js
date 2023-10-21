function executarExercicio99(){
    alert("99.  Crie um programa que leia uma matriz 3x3 de números inteiros e exiba a soma dos elementos da diagonal principal.")

    let mat =[], soma =0, resultado=""

    for(let linha=0;linha<3;linha++){
        mat[linha]=[]
        for(let coluna = 0;coluna<3;coluna++){
            mat[linha][coluna]=parseInt(prompt("Digite o numero da linha " + linha + " e coluna " + coluna))
        }
    }

    for(let linha=0;linha<3;linha++){
        for(let coluna = 0;coluna<3;coluna++){
            resultado += mat[linha][coluna]+" "
            soma +=(linha==coluna)?mat[linha][coluna]:0
        }
        resultado+="\n"
    }

    alert("matriz:\n"+resultado+"-------\n"+"soma:"+soma)

}