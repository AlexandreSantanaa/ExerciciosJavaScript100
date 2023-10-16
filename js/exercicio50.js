function executarExercicio50(){
    alert("50.  Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário")

    let numero = parseInt(prompt("Digite um numero:"))
    let fatorial = 1
    for(let i = numero; i>=1; i--){
        fatorial *=i //5*483
    }

    alert("Fatoria de " + numero + " é = " + fatorial)
}