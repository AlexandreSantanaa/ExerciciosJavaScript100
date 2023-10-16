function executarExercicio32(){
    alert("32.  Escreva um programa que leia a nota de um aluno em uma prova e exiba a sua conceituação conforme a tabela de notas.")

    let nota = parseFloat(prompt("Digite sua nota"))

    let resposta = (nota>=9)?"A":(nota<9 && nota>=8)?"B":(nota<8 && nota>=7)?"C":(nota<7 && nota>=6)?"D":"E"
    alert("Sua nota é " + resposta)
}