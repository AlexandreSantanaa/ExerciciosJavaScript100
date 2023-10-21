function executarExercicio89(){
    alert("89.Escreva um programa que leia 5 números inteiros e calcule a média dos valores pares e a média dos valores ímpares. ")

    let numero = [], par=[], impar=[], mediaPar=0, mediaImpar = 0

    for(let i =0; i<5; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:")) 
        
        if (numero[i] % 2 === 0) {
            par.push(numero[i]);
        } else {
            impar.push(numero[i]);
        }
    }

    if(par.length>0){
        mediaPar = par.reduce((a,b)=>a+b)/par.length
    }

    if(impar.length>0){
        mediaImpar = impar.reduce((a,b)=>a+b)/impar.length
    }

    alert("Media numeros pares: " + mediaPar +"\nMedia numeros imapres: "+mediaImpar)
}