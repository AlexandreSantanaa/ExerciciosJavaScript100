function executarExercicio30(){
    alert("30.  Crie um programa que leia o número de maçãs compradas e exiba o valor total a ser pago. O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.")

    let numeroMaca = parseInt(prompt("Digite a quantidade de maças compradas"))

    let resposta = (numeroMaca<12)?numeroMaca*0.5:numeroMaca*0.4

    alert("Valor total a paga R$"+resposta)
}