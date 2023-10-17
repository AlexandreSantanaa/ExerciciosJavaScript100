function executarExercicio83(){
    alert("83.  Escreva um programa que leia 10 números inteiros e exiba a soma deles.")

    let numero = [], soma=0

    for(let i = 0; i<10; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
        soma += numero[i]
    }
    alert(soma)
}