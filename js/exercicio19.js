function executarExercicio19(){
    alert("19.  Faça um programa que receba três notas de um aluno e exiba se ele foi aprovado ou reprovado. A média para aprovação é 7.")

    let nota01 = parseFloat(prompt("Digite a nota 01:"))
    let nota02 = parseFloat(prompt("Digite a nota 02:"))
    let nota03 = parseFloat(prompt("Digite a nota 03:"))

    let media = (nota01+nota02+nota03)/3

    resposta = (media>=7)?"Aprovado":"reprovado"

    alert(resposta)
}