function executarExercicio41(){
    alert("41.  Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor.")

    let numero = parseInt(prompt("Digite um numero:"))

    for(let i = 0; i<=10; i++){
        console.log(numero + ("x") + i + "=" + numero*i)
    }
}