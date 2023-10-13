function executarExercicio05(){
    alert("5. Escreva um programa que leia o preço de um produto e a quantidade comprada, e calcule o valor total a ser pago com desconto de 10% se a quantidade for maior que 10 unidades.")

    let preco = parseFloat(prompt("Digite o valor do produto"))
    let quantidade = parseFloat(prompt("Digite a quantidade do produto"))

    let valorTotal = (quantidade>10)?preco*quantidade-(preco*quantidade*0.1):preco*quantidade

    alert("Valor total é R$"+valorTotal)
}