function executarExercicio78(){
    alert("Crie um programa que exiba os números ímpares de 1 a 50")

    let contador =1

    do {
        (contador%2==0?"":console.log(contador))
        contador++
    } while (contador<=50);
}