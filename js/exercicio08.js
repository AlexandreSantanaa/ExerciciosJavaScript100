function executarExercicio08(){
    alert("8. Escreva um programa que leia dois números inteiros e troque os seus valores, ou seja, o primeiro deve ficar com o valor do segundo e vice-versa.")

    let a, b, c

    a = parseInt(prompt("Digite um numero"))
    b = parseInt(prompt("Digite outro numero"))
    
    c= a
    a = b
    b = c

    alert(a + " e " + b)
}