function executarExercicio03(){
    alert("3. Crie um programa que leia a base e a altura de um triângulo e calcule sua área.")

    let baseTriangulo = parseFloat(prompt("Digite o tamanho da base do triângulo:"))
    let alturaTriangulo = parseFloat(prompt("Digite o tamanho da altura do triângulo:"))

    let area = baseTriangulo*alturaTriangulo/2

    alert("A area do trinângulo é:"+area)
}