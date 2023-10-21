function executarExercicio90(){
    alert("90.  Crie um programa que leia 10 números inteiros e exiba a quantidade de números positivos e a quantidade de números negativos.")

    let numero = [], positivo=0, negativo = 0
    
    for(let i =0; i<5; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
        
        if(numero[i]>=0){
            positivo++
        }else{
            negativo++
        }
    }

    alert("A media dos numeros postivos é:" + positivo+"\n A media dos numeros negativos é" + negativo)
}