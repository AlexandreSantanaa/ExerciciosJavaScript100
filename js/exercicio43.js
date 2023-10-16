function executarExercicio43() {
    alert('43.  Faça um programa que leia um número inteiro e exiba se ele é um número primo.')

    let numero = parseInt(prompt("Digite um numero")), contador=0

    for(let i = numero; i>=0; i--){
        contador += (numero%i==0)?1:0
    }

    (contador > 3)?alert("Não é primo"):alert("é primo")

}
