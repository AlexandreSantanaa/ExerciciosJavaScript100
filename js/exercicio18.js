function executarExercicio18(){
    alert("18.  Crie um programa que leia dois números inteiros e exiba o maior deles.")

    let valor01 = parseFloat(prompt("Digite um numero"))
    let valor02 = parseFloat(prompt("Digite outro numero"))

    let resposta = Math.max(valor01, valor02)

    alert('o maior é:'+resposta)
}