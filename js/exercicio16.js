function executarExercicio16() {
  alert(
    "16.  Faça um programa que verifique se um número é positivo, negativo ou zero."
  );

  let numero = parseInt(prompt("Digite um numero"));

  let resposta = numero < 0 ? "negativo" : numero > 0 ? "positivo" : "zero";

  alert(numero + " é " + resposta)
}
