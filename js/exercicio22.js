function executarExercicio22(){
    alert("22.  Faça um programa que receba o salário de um funcionário e exiba o valor do seu bônus. Se o salário for maior que R$ 2000, o bônus é de 10%, caso contrário, é de 5%.")

    let salario = parseFloat(prompt("Digite seu salario:"))

    salario += (salario>2000)?0.1*salario:0.05*salario

    alert("Salario novo é de R%"+salario)
}