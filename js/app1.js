// Ejercicio 1:
// Temas: Fundamentos de programación · Operadores matemáticos · Arreglos · Función declarada.
// Enunciado analítico:

import { calcularPromedio } from "../modules/promedio.js";

// Un aprendiz recibe varias calificaciones y desea saber su rendimiento general. Se necesita un programa que permita ingresar las notas obtenidas y calcule el promedio, además de evaluar si el rendimiento es Alto, Medio o Bajo según rangos preestablecidos.

// • Alto mayor o igual que 4.5
// • Medio menor a 4.5 y mayor o igual 3.0
// • Bajo < menor que 3.

// Requerimientos:
// • Crear una función declarada calcularPromedio() que reciba un arreglo de notas.
// • Usar un ciclo para recorrer el arreglo.
// • Determinar el rendimiento con condicionales.
// • Retornar el promedio y el nivel de rendimiento.

// Entradas solicitadas por el programa:
// • Cantidad de notas.
// • Cada una de las notas.

// Salidas:
// • Promedio final.
// • Categoría de rendimiento. 

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