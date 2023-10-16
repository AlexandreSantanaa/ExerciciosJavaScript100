function executarExercicio31(){
    alert("31.  Faça um programa que leia o valor do salário-mínimo e o salário de um funcionário, e exiba quantos salários mínimos ele recebe.")

    let salarioMinimo = parseFloat(prompt("Digite o valor do salario minimo:"))
    let salarioFuncionario = parseFloat(prompt("Digite o seu salario"))

    let numeroSalarioMinimo = salarioFuncionario/salarioMinimo

    alert(numeroSalarioMinimo)

}