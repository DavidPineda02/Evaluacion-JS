import { calcularImpuestoUnitario } from "../modules/calcularImpuesto.js";

// Función principal que maneja la interacción con el usuario
export function impuestoTotal() {
    // Solicitar la cantidad de productos a procesar
    let cantProd = Number(prompt("Ingrese la cantidad de productos a procesar:"));

    // Variable para acumular el impuesto total
    let totlImpuesto = 0;

    // Bucle para procesar cada producto
    for (let i = 0; i < cantProd; i++) {

        // Solicitar valor y porcentaje de impuesto para cada producto
        let valor = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}:`));
        let numPorct = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i + 1}:`));

        // Calcular el impuesto unitario y acumularlo al total
        totlImpuesto += calcularImpuestoUnitario(valor, numPorct);
    }

    // Mostrar el impuesto total acumulado
    alert(`El impuesto total acumulado es: ${totlImpuesto.toFixed(1)}`);
}