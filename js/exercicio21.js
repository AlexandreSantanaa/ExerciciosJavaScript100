function executarExercicio21(){
    alert("21.  Crie um programa que leia a idade de um grupo de pessoas e exiba quantas são menores de idade e quantas são maiores de idade.")

    let idade=0, quantidadePessoas=0,  maiorIdade=0, menorIdade=0

    quantidadePessoas = parseInt(prompt("Digite a quantidade de integrantes do grupo"))

    for(let i = 1; i<=quantidadePessoas; i++){
        idade = prompt("Digite a idade da " + i + "° pessoa")
        
        menorIdade += (idade>=18)?0:1
        maiorIdade += (idade>=18)?1:0
    }

    alert("Das " + quantidadePessoas + " pessoa(s) " + maiorIdade +" é/são maiores de idade e " + menorIdade + " é/são menores de idade.")
}