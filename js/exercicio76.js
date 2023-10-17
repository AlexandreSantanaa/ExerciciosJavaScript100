function executarExercicio76(){
    alert("Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci")
    let termo01=1, termo02=1, termoN=0, contador=1

    do {
        termoN=termo01
        console.log(termo01)

        termo01=termo02
        termo02=termo01+termoN
        contador++  
    } while (contador<=20);
}