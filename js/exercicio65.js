function executarExercicio65() {
  alert(
    " Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop 'while'."
  );

  let numero = parseInt(prompt("Digite um numero:")), i=numero;
  let fatorial = 1;
  while (numero >= 1) {
    fatorial *= numero;
    numero--;
  }
  alert("Fatorial de " + i + " é " + fatorial)
}
