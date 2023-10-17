function executarExercicio82(){
    alert('82.  Faça um programa que leia 5 números inteiros e exiba-os na ordem inversa em que foram digitados.')

    let numero = []
    for(let i = 0; i<=4; i++){
       numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
    }

    for(let i = numero.length-1; i>=0; i--){
        console.log(numero[i])
    }

}