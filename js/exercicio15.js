function executarExercicio15(){
    alert("15.  Crie um programa que leia o salário de um funcionário e calcule o novo salário com um aumento de 15%.")

    let salario = parseFloat(prompt("Digite seu salario:"))

    salario+=salario*0.15

    alert("Seu novo salario é:" + salario)

}