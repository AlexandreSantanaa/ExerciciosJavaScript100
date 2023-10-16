function executarExercicio11(){
    alert("11.  Escreva um programa que calcule a média aritmética entre três números reais inseridos pelo usuário. ")

    let valor01=0, valor02 =0, valor03=0, media=0
    
    valor01 = parseFloat(prompt("Digite o primeiro numero:"))
    valor02 = parseFloat(prompt("Digite o segundo numero:"))
    valor03 = parseFloat(prompt("Digite o terceiro numero:"))

    media = (valor01+valor02+valor03)/3

    alert("A media é:" + media)
}