function executarExercicio14(){
    alert("14.  Escreva um programa que leia a idade de uma pessoa em anos, meses e dias, e calcule quantos dias de vida ela tem.")

    let anos = parseInt(prompt("Digite quantos anos voce tem:"))
    let meses = parseInt(prompt("Digite quantos meses voce tem:"))
    let dias = parseInt(prompt("Digite quantos dias voce tem:"))

    let idadeDias = anos*365+meses*30+dias

    alert("Voce tem " + idadeDias + " dias de vida")
}