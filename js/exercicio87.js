function executarExercicio87(){
    alert("87.  Crie um programa que leia 10 números inteiros e exiba-os em ordem crescente.")

    let numero = [], ordem = ""
    for(let i =0; i<3; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
    }
    
    function crescenteDecrescente(numero, ordem){
        numero.sort(function(a, b){
            return ordem == "crescente"?a -b:b-a
        })
        return numero.join(' ');
    }

    let crescente = crescenteDecrescente(numero, "crescente")
    let decrescente = crescenteDecrescente(numero, "decrescente")

    alert("Crescente:" + crescente + "\nDecrescente:" + decrescente);


}