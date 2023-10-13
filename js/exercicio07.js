function executarExercicio07(){
    alert("7. Faça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, considerando que o funcionário recebe 5% de comissão sobre o salário base. ")

    let salarioBase = parseFloat(prompt("Digite seu salario base:"))
    let salarioLiquido = salarioBase+salarioBase*0.05

    alert("salario liquido:"+salarioLiquido)
}