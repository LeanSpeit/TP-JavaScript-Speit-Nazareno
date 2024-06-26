let cantidadProducto = parseInt(prompt("Ingrese la cantidad de artículos:"));
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario por artículo:"));

switch (true) {
    case isNaN(cantidadProducto) || isNaN(precioUnitario):
        console.log("Por favor, ingresa números para la cantidad y el precio.");
        break;
    case cantidadProducto <= 1 || precioUnitario <= 0:
        console.log("Por favor, ingresa números mayores a 1 para la cantidad y precios positivos.");
        break;
    default:
        let total = cantidadProducto * precioUnitario;

        if (cantidadProducto >= 10 && total > 20000) {
            let descuento = total - (total * 0.15);
            console.log('Tiene un descuento del 15%. Su total a pagar es:', descuento, 'pesos.');
        } else {
            console.log("No se superó la cantidad mínima de artículos o el precio mínimo para aplicar el descuento.");
            console.log("Total a pagar:"), total
        };
        break;
}