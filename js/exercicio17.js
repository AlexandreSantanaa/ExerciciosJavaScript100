function executarExercicio17(){
    alert("17.  Escreva um programa que leia a idade de uma pessoa e exiba uma mensagem indicando se ela é criança, adolescente, adulto ou idoso.")

    let idade= parseInt(prompt("Digite sua idade"))

    let resposta = (idade<=10)?'criança':(idade>10 && idade<=17)?'adolecente':(idade>17 && idade<=59)?"adulto":"idoso"

    alert("voce possui "+ idade +" anos é um "  +   resposta)
}