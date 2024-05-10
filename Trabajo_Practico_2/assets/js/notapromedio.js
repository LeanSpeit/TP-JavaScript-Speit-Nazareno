let nota1 = parseInt(prompt("Ingrese la primera nota"))
let nota2 = parseInt(prompt("Ingrese la segunda nota"))
let nota3 = parseInt(prompt("Ingrese la tercera nota"))

let promedio = (nota1 + nota2 + nota3) / 3

if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
    console.log("Notas no validas")
}
else if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
    console.log("Notas no validas")
}

if (promedio >= 1 && promedio <=3) {
    console.log("Nota Insuficiente")
} else if (promedio >= 4 && promedio <=5) {
    console.log("Nota Regular")
} else if (promedio >= 6 && promedio <=7) {
    console.log("Nota Buena")
} else if (promedio >= 8 && promedio <=9) {
    console.log("Nota Muy Buena")
} else if (promedio === 10) {
    console.log("Nota Sobresaliente")
} 
