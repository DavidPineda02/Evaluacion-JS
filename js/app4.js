// Ejercicio 4:
// Temas: Condicionales · Operadores matemáticos · Funciones y modularización · Ciclos
// Enunciado analítico:

import { calcularImpuestoUnitario } from "../modules/calcularImpuesto.js";

// Un comerciante necesita calcular el impuesto total de varios productos. Para cada producto se debe ingresar su valor y aplicar un porcentaje de impuesto específico. El programa procesará múltiples productos y debe acumular el total a pagar.

// Requerimientos:
// • Crear una función declarada calcularImpuestoUnitario(valor, porcentaje).
// • Crear una función expresada const procesarImpuestos = function(){} que solicite la cantidad de productos, pida cada valor y porcentaje, y use la función declarada.
// • Usar un ciclo para iterar.
// • Retornar el total final.

// Entradas solicitadas:
// • Cantidad de productos.
// • Valor de cada producto.
// • Porcentaje de impuesto.

// Salidas:
// • Impuesto total acumulado

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