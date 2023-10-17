function executarExercicio80(){
    alert("Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário")

    let numero = parseInt(prompt("Digite um numero:"))
    let fatorial = 1, contador = numero


    do {
        fatorial *=numero
        numero--
    } while (numero>=1);
    alert("O fatorial de " + contador + " é " + fatorial)
}