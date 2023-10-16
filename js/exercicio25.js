function executarExercicio25(){
    alert("25. Faça um programa que leia o número de faltas de um aluno em uma disciplina e exiba sua situação. Se o número de faltas for maior que 15, ele é reprovado por falta.")

    let faltas = parseInt(prompt("Digite a quantidade de faltas"))

    let situacao = (faltas>15)?"Reprovado por falta":"aprovado em presença "

    alert(situacao)
}