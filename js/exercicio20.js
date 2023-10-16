function executarExercicio20(){
    alert("20.  Escreva um programa que leia um número inteiro e exiba se ele é par ou ímpar.")

    let numero = parseInt(prompt("Digite um numero:"))

    let resposta = (numero%2==0)?"par":"impar"

    alert(numero + " é " + resposta)
}