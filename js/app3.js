import { generarTabla } from "../modules/tablaMult.js";

// Función principal que maneja la interacción con el usuario
export function tablaDeMultiplicar() {
    // Solicitar el número para generar su tabla de multiplicar
    let numero = Number(prompt("Ingrese el numero para generar su tabla de multiplicar:"));

    // Generar la tabla usando la función importada
    let resultados = generarTabla(numero);

    // Mostrar los resultados en un mensaje
    alert(`Tabla de multiplicar del ${numero}: \n${resultados.join("\n")}`);
}