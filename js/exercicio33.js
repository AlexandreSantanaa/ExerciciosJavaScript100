function executarExercicio33(){
    alert("33.  Crie um programa que leia o nome e o turno (M ou V) de um aluno e exiba uma mensagem de saudação de acordo com o turno. Matutino: om dia, aluno Vespertino: Boa tarde, aluno.")

    let turno = prompt("Digite seu turno:\nM-MATUTINO\nV-VESPERTINO")

    let resposta = (turno.toLowerCase()=="m" )?alert("Bom dia, Aluno"):alert("Boa Tarde, Aluno")
}