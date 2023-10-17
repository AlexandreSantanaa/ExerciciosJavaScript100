function executarExercicio85(){
    alert("85.  Faça um programa que leia 5 números inteiros e exiba quantos deles são pares.")

    let numero = [], contador=0

    for(let i =0; i<5; i++){
        numero[i]= parseInt(prompt("Digite o " + (i+1) + "° numero:"))
        contador += (numero[i]%2==0)?1:0
    }
    alert(contador + " é/são par(es)")
}