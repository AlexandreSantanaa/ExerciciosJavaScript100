function executarExercicio111(){
    alert("111. Crie um programa que leia duas matrizes 2x2 de números inteiros e exiba a subtração entre elas")

    let mat01=[], mat02=[], matSubtracao=[], resultado01='', resultado02='', resultadoSubtracao=''

    for(let i=0; i<2; i++){
        mat01[i]=[]
        for(let j =0; j<2; j++){
            mat01[i][j] = parseInt(prompt("Matriz01:\nDigite o numero da linha " + i + " e coluna " + j));
        }
    }

    for(let i=0; i<2; i++){
        mat02[i]=[]
        for(let j =0; j<2; j++){
            mat02[i][j] = parseInt(prompt("Matriz02:\nDigite o numero da linha " + i + " e coluna " + j));
        }
    }

    for(let i=0; i<2; i++){
        matSubtracao[i]=[]
        for(let j =0; j<2; j++){
            matSubtracao[i][j] = mat01[i][j] - mat02[i][j]
            
            resultado01 += mat01[i][j]+" "
            resultado02 += mat02[i][j]+" "
            resultadoSubtracao += matSubtracao[i][j]+" "
        }
        resultado01+="\n"
        resultado02+="\n"
        resultadoSubtracao+="\n"
    }

    alert(resultado01+"\n-\n"+resultado02+"\n=\n"+resultadoSubtracao)
}