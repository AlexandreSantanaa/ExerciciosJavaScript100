function executarExercicio75(){
    alert("75.  Crie um programa que leia o nome e a idade de 5 pessoas usando o loop do-while e exiba a média das idades.")

    let nome = [], idade=[],media=0, contador=0
    do {
        nome[contador]=prompt("Digite o seu nome")
        idade[contador]=parseInt(prompt("Digite a sua idade " + nome[contador]))
        media+=idade[contador]
        contador++
    } while (contador<=4);

    media /=idade.length
    alert("A media é " + media)
}