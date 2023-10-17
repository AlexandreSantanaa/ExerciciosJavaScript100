function executarExercicio86(){
    alert("86.  Escreva um programa que leia 5 números inteiros e exiba o maior e o menor valor digitado.")

    let numero = [], maior=0, menor=0


    for(let i = 0; i<5; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
        if(i == 0){
            maior = numero[i]
            menor = numero[i]
        }else{
            maior = (numero[i]>=maior)?numero[i]:maior
            menor = (numero[i]<=menor)?numero[i]:menor
        }
        
    }
    alert("Maior:"+maior+"\nMenor:"+menor)
}
