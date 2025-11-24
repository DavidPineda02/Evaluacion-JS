// Ejercicio 3:
// Temas: Control de flujos (ciclos) · Operadores matemáticos · Función flecha.
// Enunciado analítico:

import { generarTabla } from "../modules/tablaMult.js";

// Se necesita generar la tabla de multiplicar de un número ingresado por el usuario. El programa debe mostrar resultados del 1 al 10. Este ejercicio permite evaluar el manejo de ciclos y operaciones matemáticas.

// Requerimientos:
// • Crear una función flecha generarTabla = (numero) => {}.
// • Usar un ciclo for.
// • Retornar o mostrar los resultados en un arreglo.

// Entradas solicitadas:
// • Número base de la tabla.

// Salidas:
// • Arreglo con los resultados 1×n hasta 10×n. 

// Función principal que maneja la interacción con el usuario
export function tablaDeMultiplicar() {
    // Solicitar el número para generar su tabla de multiplicar
    let numero = Number(prompt("Ingrese el numero para generar su tabla de multiplicar:"));

    // Generar la tabla usando la función importada
    let resultados = generarTabla(numero);
    
    // Mostrar los resultados en un mensaje
    alert(`Tabla de multiplicar del ${numero}: \n${resultados.join("\n")}`);
}