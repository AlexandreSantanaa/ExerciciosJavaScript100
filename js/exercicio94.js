function executarExercicio94(){
    alert("94.  Faça um programa que leia 10 números inteiros e exiba quantos deles estão no intervalo de 10 a 50.")

    let numero = [], estaDentro = 0

    for(let i =0; i<5; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 

        estaDentro += (numero[i]>=10 && numero[i]<=50)?1:0
    }

    alert(estaDentro + " está(ão) dentro desta margem")


}