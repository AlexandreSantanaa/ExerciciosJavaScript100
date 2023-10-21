function executarExercicio95(){
    alert("95.  Escreva um programa que leia 7 números inteiros e exiba apenas os números pares. ")

    let numero = [], par = []

    for(let i =0; i<5; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 

        if(numero[i]>=0){
            par.push(numero[i])
        }
    }

    for(let i = 0; i<par.length; i++){
        console.log(par[i])
    }

}