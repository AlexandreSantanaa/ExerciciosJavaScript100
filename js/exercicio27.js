function executarExercicio27(){
    alert("7.  Crie um programa que leia a idade de uma pessoa e seu sexo (M ou F) e exiba uma mensagem indicando se ela pode ou não se aposentar. Homens podem se aposentar com 65 anos ou mais, e mulheres com 60 anos ou mais. ")

    let idade = parseInt(prompt("Digite sua idade"))
    let sexo = parseInt(prompt("Digite o valor correspondente ao seu sexo:\n1-masculino\n2-feminino"))

   let resposta = (sexo==1 && idade>=65)?alert("Pode aposentar"):(sexo==2 && idade>=60)?alert("Pode aposentar"):alert("Não pode aposentar")
   

}