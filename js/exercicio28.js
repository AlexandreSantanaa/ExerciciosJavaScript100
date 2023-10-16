function executarExercicio28() {
    alert("28. Faça um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC) e a sua classificação. Considere a tabela de classificação do IMC.");

  let peso = parseFloat(prompt("Digite o seu peso (em quilogramas):"));

  let altura = parseFloat(prompt("Digite a sua altura (em metros):"));

  let imc = peso / (altura * altura);

  let classificacao = 
  imc < 18.5
      ? "Abaixo do Peso"
      : imc < 24.9
      ? "Peso Normal"
      : imc < 29.9
      ? "Sobrepeso"
      : imc < 34.9
      ? "Obesidade Grau I"
      : imc < 39.9
      ? "Obesidade Grau II"
      : "Obesidade Grau III";

  alert("Seu IMC é: " + imc.toFixed(2) +"\nSua classificação de IMC é: " + classificacao);
}
