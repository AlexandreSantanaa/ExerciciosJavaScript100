function executarExercicio91() {
    alert("91. Faça um programa que leia 5 números inteiros e verifique se algum deles é igual a zero.");

    let numero = []
    
    for(let i =0; i<5; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
    }

    if (numero.includes(0)) {
        console.log("Tem número igual a zero.");
    } else {
        console.log("Não tem número igual a zero.");
    }
}
