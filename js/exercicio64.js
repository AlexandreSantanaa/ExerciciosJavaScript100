function executarExercicio64(){
    alert("64.  Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop 'while' ")

    let numero = parseInt(prompt("Digite um numero"))
    let digito = [], contador=0

    while(numero>=1){
        digito[contador] = numero%10
        numero = Math.trunc(numero/10) 
        contador++   
    }
     contador = digito.length-1

    while(contador>=0){
        console.log(digito[contador])
        contador--
    }
}