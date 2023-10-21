function executarExercicio92(){
    alert("92.  Escreva um programa que leia 10 números inteiros e exiba a soma dos valores positivos e a soma dos valores negativos")

    let numero = [], negativo=0, positivo=0
    
    for(let i =0; i<5; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 

        if(numero[i]>=0){
            positivo +=numero[i]
        }else{
            negativo+=numero[i]
        }
    }

    alert("Soma positivo = " + positivo + "\nSoma negativo = " + negativo)

}