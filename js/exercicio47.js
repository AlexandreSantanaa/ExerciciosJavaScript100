function executarExercicio47(){
    alert("47.  Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido. ")

    let numero = parseInt(prompt("Digite um numero")), soma=0

    
    for(let i = 1; i<=numero; i++){
        soma += (i%2==0)?i:0
    }

    alert(soma)
}