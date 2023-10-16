function executarExercicio24() {
  alert(
    "24.  Crie um programa que leia três números inteiros e exiba-os em ordem crescente."
  );

  let valor = []

  for (let i = 0; i <= 2; i++) {
    valor[i] = parseInt(prompt("Digite o " + (i + 1) + "° valor:"));
  }

  function ordem(valor, ordem) {
    valor.sort(function (a, b) {
        return ordem === "crescente" ? a - b : b - a;
    });
    return valor.join();
  }

  let crescente = ordem(valor, "crescente");
  let decrescente = ordem(valor, "decrescente");

  alert("Crescente:" + crescente + "\nDecrescente:" + decrescente);
}
