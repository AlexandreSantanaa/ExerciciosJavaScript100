function executarExercicio02(){
    alert("2. Escreva um programa que leia o raio de um círculo e calcule sua área e perímetro. ")

    let raio=0, area=0, perimetro=0
    
    raio = parseFloat(prompt("Digite um valor para o raio:"))

    area = Math.PI*raio**2
    perimetro = 2*Math.PI*raio

    alert("Area:"+area+"\nPerimetro:"+perimetro)
}