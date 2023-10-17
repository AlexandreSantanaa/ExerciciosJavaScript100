function executarExercicio84(){
    alert("Crie um programa que leia 7 números inteiros e exiba a média aritmética dos valores lidos.")

    let numero = [], media=0
    for(let i = 0; i<7; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
        media += numero[i]
    }
    media /= numero.length

    alert(media)
}   