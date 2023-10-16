function executarExercicio44(){
    alert("44.  Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido. ")

    let termo01=1, termo02 = 1; termoN=0

    let numero = parseInt(prompt("Digite ate qual termo voce deseja ir"))
    for(let i = 1; i<=numero; i++){
        termoN = termo01    //1//
        console.log(termo01)//1

        termo01=termo02//1

        termo02=termo01+termoN //2
    
    }
}