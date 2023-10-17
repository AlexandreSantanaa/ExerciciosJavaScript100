function executarExercicio69(){
    alert("69.  Crie um programa que exiba os números pares de 1 a 50")

    let numero=1
    do {
        console.log((numero%2==0?numero:""))
        numero++
    } while (numero<=50);
}