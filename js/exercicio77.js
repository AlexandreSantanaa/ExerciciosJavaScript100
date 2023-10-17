function executarExercicio77(){
    alert("Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido")

    let numero = parseInt(prompt("Digite um numero:")), contador = 1, soma=0

    do {
        soma +=(contador%2==0)?contador:0
        contador++
    } while (contador<=numero);
    alert(soma)
}