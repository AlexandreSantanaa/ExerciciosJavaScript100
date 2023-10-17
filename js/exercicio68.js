function executarExercicio68(){
    alert("68.  Escreva um programa que calcule a soma dos números de 1 a 100")

    let numero =1; soma = 0

    do {
        soma+=numero
        numero++
    } while (numero<=100);
    console.log(soma)
}