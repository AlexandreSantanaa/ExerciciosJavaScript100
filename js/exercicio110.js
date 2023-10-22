    function executarExercicio110(){
        alert("10. Escreva um programa que leia uma matriz 3x3 de números inteiros e verifiquese ela é uma matriz identidade.")

        let mat = [], resultado='', contador=0

    for (let i = 0; i < 3; i++) {
        mat[i] = [];
        for (let j = 0; j < 3; j++) {
        mat[i][j] = parseInt(prompt("Matriz01:\nDigite o numero da linha " + i + " e coluna " + j));
        }
    }


    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            resultado += mat[i][j]+" "
            contador += ((i==j) && (mat[i][j]=!1))?0:(mat[i][j]==0)?0:1
        }
        resultado+="\n"
    }

    (contador==0)?alert("A matriz:\n"+resultado+"\n é uma matriz identidade"):alert("A matriz:\n"+resultado+"\n não é uma matriz identidade")
    }