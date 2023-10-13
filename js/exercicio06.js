function executarExercicio06(){
    alert("6. Crie um programa que leia um número inteiro e exiba se ele é par ou ímpar. ")

    let valor = parseInt(prompt("Digite um numero:"))

    let resposta = (valor%2==0)?"par":"impar"

    alert(valor+" é "+resposta)
}