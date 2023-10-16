function executarExercicio46(){
    alert("46.  Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci")

    let turno01 = 1, turno02 = 1, turnoN = 0

    for(let i = 0; i<=20; i++){
        turnoN=turno01
        console.log(turno01)

        turno01 = turno02
        turno02 = turno01 + turnoN
    }
    
}