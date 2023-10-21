function executarExercicio88(){
    alert("88. Faça um programa que leia 10 números inteiros e exiba quantos deles são positivos.")

    let numero = [], positivo=[], media=0

    for(let i =0; i<10; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
        if(numero[i]>=0){
            positivo.push(numero[i])
        }
    }

    if(positivo.length>0){
        media = positivo.reduce((a,b)=>a+b)/positivo.length
    }

    alert("A media é:" + media)


}