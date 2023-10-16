function executarExercicio49(){
    alert("Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente.")

    let digitos = prompt("Digite um numero")

    console.log(digitos.split("").join('\n'))
}