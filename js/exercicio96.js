function executarExercicio96(){
    alert("96.  Crie um programa que leia 5 nomes e exiba-os em ordem alfabética.")

    let nome = []

    for(let i = 0; i<5; i++){
        nome[i]=prompt("Digite um nome:")
    }

    function ordemAlfabetica(nome){
        return nome.sort()
    }

    let ordem = ordemAlfabetica(nome)

    alert(nome)
}