function executarExercicio10(){
    alert("10.  Faça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor.")

    let numero = parseFloat(prompt("Digite um numero para fazer a tabuada:"))

    for(let i = 0; i<=10; i++){
        console.log(numero+"x"+i+"="+numero*i)
    }
}