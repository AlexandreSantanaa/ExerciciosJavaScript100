function executarExercicio49(){
    alert("Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente.")

    //let numero = prompt("Digite um numero")

    //console.log(numero.split("").join('\n'))

    
    let digito = [], numeroVetor=0

    for(let numero = parseInt(prompt("Digite um numero")); numero>=1; numero = Math.trunc(numero/10)){
        digito[numeroVetor] = numero%10 //100 - 0
        numeroVetor++
    }

    for(let i = digito.length-1; i>=0; i--){
        console.log(digito[i])
    }

}