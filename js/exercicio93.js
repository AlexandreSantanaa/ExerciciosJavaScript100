function executarExercicio93(){
    alert("93.  Crie um programa que leia 5 números inteiros e exiba-os em ordem decrescente")

    let numero = []

    for(let i =0; i<5; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
    }

    function decrescente(numero){
        numero.sort(function(a,b){
            return b-a
        })
        return numero.join(",")
    }

    let decre = decrescente(numero)
    alert(decre)
}