import { calcularPromedio } from "../modules/promedio.js";

// Función principal que maneja la interacción con el usuario
export function promedio() {
    // Solicitar la cantidad de notas y almacenarlas en un arreglo
    let cantidadNotas = Number(prompt("Ingrese la cantidad de notas que desea evaluar:"));

    // Crear un arreglo para almacenar las notas
    let notas = [];

    // Bucle para ingresar cada nota
    for (let i = 0; i < cantidadNotas; i++) {

        // Solicitar la nota y agregarla al arreglo
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));

        // Agregar la nota al arreglo
        notas.push(nota);
    }

    // Calcular el promedio y el rendimiento usando la función importada
    alert(`El promedio de las notas es: ${calcularPromedio(notas).promedio.toFixed(1)} \nEl rendimiento es: ${calcularPromedio(notas).rendimiento}`);
}