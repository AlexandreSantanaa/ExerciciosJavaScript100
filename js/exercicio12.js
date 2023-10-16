function executarExercicio12(){
    alert("12.  Crie um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC). ")

    let peso = parseFloat(prompt("Digite seu peso em kg:"))
    let altura = parseFloat(prompt("Digite sua altura em m:"))

    let imc = peso/altura**2

    alert("Seu imc é:"+imc)
}