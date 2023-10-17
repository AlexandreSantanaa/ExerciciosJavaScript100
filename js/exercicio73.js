function executarExercicio73() {
  alert(
    "Faça um programa que leia um número inteiro e exiba se ele é um número primo"
  );

  let numero = parseInt(prompt("Digite um numero"));
  let contador = 1,
    contadorPrimo = 0;

  do {
    contadorPrimo += numero % contador == 0 ? 1: 0;
    contador++
  } while (contador <= numero);

  (contadorPrimo<=2)?alert(numero + " é primo"):alert(numero + " não é primo")
}
