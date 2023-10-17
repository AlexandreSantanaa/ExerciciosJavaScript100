function executarExercicio71(){
    alert(" Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor")

    let numero = parseInt(prompt("Digite um numero:")), contador = 0

    do {
        console.log(numero+"x"+contador+"="+numero*contador)

        contador++
    } while (contador<=10);
}