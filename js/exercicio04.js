function executarExercicio04(){
    alert("4. Faça um programa que receba três notas de um aluno (cada nota de 0 a 10) e calcule a média ponderada considerando pesos 2, 3 e 5 para as notas, respectivamente.")

    let nota01 = 0, nota02 = 0, nota03 = 0, media = 0

    nota01 = parseFloat(prompt("Digite a primeira nota"))
    nota02 = parseFloat(prompt("Digite a segunda nota"))
    nota03 = parseFloat(prompt("Digite a terceira nota"))


    media = (nota01*2+nota02*3+nota03*5)/10

    alert("A media é:"+media)
}