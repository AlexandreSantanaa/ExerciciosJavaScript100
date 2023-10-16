function executarExercicio23() {
  alert(
    "23.  Escreva um programa que leia o nome de um mês e exiba a quantidade de dias que ele possui. Considere apenas meses válidos. "
  );

  let mes = parseInt(
    prompt(
      "Digite um mês\n1-janeiro\n2-fevereiro\n3-março\n4-abril\n5-maio\n6-junho\n7-julho\n8-agosto\n9-setembro\n10-outrobro\n11-novembro\n12-dezembro"
    )
  );

  switch (mes) {
    case 1:
      alert("Janeiro tem 31 dias ");
      break;
    case 2:
      alert("Fevereiro tem 28 dias e 29 em ano bissexto");
      break;
    case 3:
      alert("Março tem 31 dias ");
      break;
    case 4:
      alert("Abril tem 30 dias ");
      break;
    case 5:
      alert("Maio 31 dias ");
      break;
    case 6:
      alert("Junho 30 dias ");
      break;
    case 7:
      alert("Julho 31 dias ");
      break;
    case 8:
      alert("Agosto 31 dias ");
      break;
    case 9:
      alert("Setembro 30 dias ");
      break;
    case 10:
      alert("Outubro 31 dias ");
      break;
    case 11:
      alert("Novembro 30 dias ");
      break;
    case 12:
      alert("Dezembro 31 dias ");
      break;

    default:
      alert("esse valor não possui mes correspondente");
      break;
  }
}
