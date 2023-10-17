function executarExercicio70(){
    alert("70.  Faça um programa que leia 5 números inteiros usando o loop do-while e exiba a média aritmética dos valores lidos.")

    let numero=[], media =0, contador=0

    do {
        numero[contador]=parseFloat(prompt("Digite o " +(contador+1)+ "° numero:"))
        media+=numero[contador]
        contador++
    } while (contador<=4);

    media=media/numero.length

    alert("A media é " + media)
}