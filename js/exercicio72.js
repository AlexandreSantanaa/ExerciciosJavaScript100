function executarExercicio72(){
    alert("72.  Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número")

    let numero = parseInt(prompt("Digite um numero:")), divisor =1

    do {
        (numero%divisor==0?console.log(divisor):'')
        divisor++
    } while (divisor<=numero);
}