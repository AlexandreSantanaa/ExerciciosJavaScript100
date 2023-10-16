function executarExercicio09(){
    alert("9. Crie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros mensal, e calcule o montante após 12 meses. ")

    let tempo=12, depositoMensal=0, taxaJurosMensal=0

    depositoMensal = parseFloat(prompt("Digite o valor do depósito mensal:"))

    taxaJurosMensal = parseFloat(prompt("Digite a taxa de juros mensal (em porcentagem):"));

    tempo = parseInt(prompt("Digite o total de meses"))

    taxaJurosMensal=taxaJurosMensal/100

    for(let i = 1; i<=tempo; i++){
        depositoMensal = depositoMensal+(depositoMensal*taxaJurosMensal)
    }
    
    alert("O valor total do montante é:" + depositoMensal)
}