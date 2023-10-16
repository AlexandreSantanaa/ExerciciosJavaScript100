function executarExercicio63(){
    alert("Crie um programa que exiba os números ímpares de 1 a 50 usando o loop while")
    
    numero = 1
    while(numero<=50){
        console.log((numero%2==1?numero:""))
        numero++
    }
}