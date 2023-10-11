function executarExercicio63(){
    let numero=0, media=0, contador=0, soma=0

    while(contador<5){
        //numero=prompt("Digite um numero")
        numero=parseInt(prompt("Digite um numero"))
        
        soma=soma+numero
        contador++
    }
    media=soma/contador
    alert(soma+"/"+contador+"="+media)
    
}