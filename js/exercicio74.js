function executarExercicio74(){
    alert("74.  Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido")

    let numero = parseInt(prompt("Digite o termo da sequencia de fibonacci"))
    let termo01=1, termo02=1; termoN=0, contador=1
    
    do {
        termoN=termo01
        console.log(termo01)

        termo01=termo02
        termo02=termo01+termoN
        contador++
    } while (contador<=numero);
}