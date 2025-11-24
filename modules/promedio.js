// Modulo para calcular el promedio y el rendimiento basado en las notas proporcionadas
export function calcularPromedio(notas) {
    // Variable para almacenar la suma de las notas
    let suma = 0;

    // Bucle para sumar todas las notas
    for (let i = 0; i < notas.length; i++) {
        // Sumar la nota actual a la suma total
        suma += notas[i];
    }

    // Calcular el promedio dividiendo la suma total por la cantidad de notas
    let promedio = suma / notas.length;

    // Variable para almacenar el nivel de rendimiento
    let rendimiento = "";
    
    // Determinar el nivel de rendimiento basado en el promedio
    if (promedio >= 4.5) {
        // Asignar "Alto" si el promedio es mayor o igual a 4.5
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        // Asignar "Medio" si el promedio es menor a 4.5 pero mayor o igual a 3.0
        rendimiento = "Medio";
    } else {
        // Asignar "Bajo" si el promedio es menor a 3.0
        rendimiento = "Bajo";
    }

    // Retornar un objeto con el promedio y el nivel de rendimiento
    return { promedio, rendimiento };
}