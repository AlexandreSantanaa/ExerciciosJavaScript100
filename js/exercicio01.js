function executarExercicio01(){
    alert(". Faça um programa que solicite dois números inteiros e exiba a soma, subtração, multiplicação e divisão entre eles.")

    let valor01=0,valor02=0,soma=0,multiplicacao=0,divisao=0,subtracao=0

    valor01 = parseFloat(prompt("DIGITE UM NUMERO"))
    valor02 = parseFloat(prompt("DIGITE OUTRO NUMERO"))

    soma=valor01+valor02
    subtracao =valor01-valor02
    multiplicacao = valor01*valor02
    divisao = valor01/valor02

    alert("Soma="+soma+"\nSubtração="+subtracao+"\nMultiplicação="+multiplicacao+"\nDivisão="+divisao)

}