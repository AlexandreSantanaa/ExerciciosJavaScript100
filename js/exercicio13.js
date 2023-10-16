function executarExercicio13(){
    alert("13.  Faça um programa que leia dois números inteiros e verifique se o primeiro é múltiplo do segundo.")

    let numero01 = parseInt(prompt("Digite um numero"))
    let numero02 = parseInt(prompt("Digite outro numero"))

    let resposta = (numero01%numero02==0)?"sim,":"nao"

    alert(resposta + " é multiplo")

}