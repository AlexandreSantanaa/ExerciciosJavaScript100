function executarExercicio26() {
  alert(
    "26.  Escreva um programa que leia o código de um produto e a quantidade comprada, e exiba o valor total a ser pago. Considere que cada produto tem um preço diferente."
  );

  let codigo="",
    quantidadeProduto=0,
    valor=0,
    confirmacao = "",
    precoTotal = 0;

  do {
    codigo = prompt("Digite o codigo do produto:");
    quantidadeProduto = parseInt(
      prompt("Digite a quantidade do produto " + codigo)
    );
    valor = parseFloat(prompt("Digite o valor do produto"));
    confirmacao = prompt("Deseja adiconar mais algum produto?\n1-sim\n2-não");

    precoTotal += valor * quantidadeProduto;
  } while (confirmacao == 1);

  alert("O preço total é de R$"+precoTotal )
}
