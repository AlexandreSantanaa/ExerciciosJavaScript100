function executarExercicio29(){
    alert("29.  Escreva um programa que leia o nome e a nota de um aluno e exiba sua situação na disciplina. Se a nota for maior ou igual a 7, o aluno está aprovado. Caso contrário, está em recuperação.")

    let nome = prompt("Digite seu nome:")
    let media = parseFloat(prompt("Digite sua media:"))

    let situacao = media>=7? alert(nome + " voce foi aprovado com media " + media): alert(nome + " voce esta de recuperação e sua media é " + media)
}