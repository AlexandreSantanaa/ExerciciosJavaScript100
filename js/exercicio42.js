function executarExercicio42() {
  alert(
    "42.  Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número."
  );

  let resposta = 0;
  let numero = parseInt(prompt("Digite um numero:"));

  for (let i = numero; i >= 0; i--) {
    resposta = numero % i == 0 ? console.log(i) : "";
  }
}
