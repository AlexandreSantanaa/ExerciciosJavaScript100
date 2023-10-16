function executarExercicio35(){
    alert("5.  Escreva um programa que leia três números inteiros e exiba a média aritmética. Se a média for maior ou igual a 7, exiba a mensagem Aprovado, caso contrário, exiba a mensagem Reprovado.")

    let valor = [], media = 0

    for(let i = 0; i<=2; i++){
        valor[i]=parseFloat(prompt("Digite a nota " + (i+1)))
        media+=valor[i]
    }

    media = media/valor.length

    let situacao = (media>=7)?"aprovado":"Reprovado"

    alert(situacao + " com media " + media)
}