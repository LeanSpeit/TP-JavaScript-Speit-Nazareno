let num1 = parseInt(prompt("Ingrese el primer número"))
let num2 = parseInt(prompt("Ingrese el segundo número"))
let num3 = parseInt(prompt("Ingrese el tercer número"))

//variantes de ascendecia

if (num1 > num2 && num2 > num3) {
    console.log(num1, num2, num3)
} else if (num1 > num3 && num3 > num2) {
    console.log(num1, num3, num2)
}

else if (num2 > num1 && num1 > num3) {
    console.log(num2, num1, num3)
} else if (num2 > num3 && num3 > num1) {
    console.log(num2, num3, num1)
}

else if (num3 > num1 && num1 > num2) {
    console.log(num3, num1, num2)
} else if (num3 > num2 && num2 > num1) {
    console.log(num3, num2, num1)
}

//variantes de igualdad

else if (num1 == num2 && num2 == num3) {
    console.log("Los números son iguales")
} else if (num1 == num2) {
    console.log("Los números son iguales")
} else if (num1 == num3) {
    console.log("Los números son iguales")
} else if (num2 == num3) {
    console.log("Los números son iguales")
}