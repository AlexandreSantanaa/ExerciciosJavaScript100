function executarExercicio45(){
    alert("45.  Crie um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades.")

    let nome = [], idade= [], media = 0 

    for(let i = 0; i<5; i++){
        nome[i]=prompt("Digite seu nome")
        idade[i]=parseInt(prompt("Digite sua idade"))
        media += idade[i]
    }

    media = media/nome.length

    alert("A media das 5 idade é" + media)
}