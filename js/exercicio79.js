function executarExercicio79(){
    alert("Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente")
    let numero = parseInt(prompt("Digite um numero"))

    let digito = [], contador=0

    do {
        digito[contador]=numero%10
        numero = Math.trunc(numero/10)
        contador++
    } while (numero>=1);

    contador = digito.length-1
    do {
        console.log(digito[contador])
        contador--
    } while (contador>=0);
}