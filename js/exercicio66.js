function executarExercicio66(){
    alert("66.  Crie um programa que leia o nome e a idade de várias pessoas usando o loop while até que o nome fim seja informado. Ao final, exiba a média das idades.")

    let confirmacao = 2; nome = [], soma = 0; contador = 0; idade = [], media = 0
    while(confirmacao==2){
        nome[contador] = prompt("Digite seu nome")
        confirmacao = (nome[contador] == "fim")?1:2

        if(confirmacao==2){
            idade[contador] = parseInt(prompt("Digite sua idade " + nome[contador]))
            soma += idade[contador]
            contador++
        }

    }
  

    
    

    soma = soma/contador

    alert("A media das idades é:" + soma)
}