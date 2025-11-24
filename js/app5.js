import { buscarElemento } from "../modules/buscarElemento.js";

export function buscarEnArreglo() {
    // Solicitar la cantidad de elementos y construir el arreglo
    let cantidad = Number(prompt("Ingrese la cantidad de elementos que tendrá el arreglo:"));

    // Crear un arreglo para almacenar los elementos
    let lista = [];

    // Bucle para ingresar cada elemento
    for (let i = 0; i < cantidad; i++) {

        // Solicitar el elemento y agregarlo al arreglo
        let elemento = prompt(`Ingrese el elemento ${i + 1}:`);

        // Convertir a minusculas e ingresar cada elemeto
        lista.push(elemento.toLowerCase());
    }

    // Solicitar el elemento a buscar
    let elementoBuscar = prompt("Ingrese el elemento que desea buscar en el arreglo:");
    
    // Usar la funcion importada para buscar el elemento y mostrar el resultado
    if (buscarElemento(lista, elementoBuscar.toLowerCase())) {
        // Mostrar mensaje si el elemento fue encontrado
        alert(`El elemento "${elementoBuscar}" fue encontrado en el arreglo.`);
    } else {
        // Mostrar mensaje si el elemento no fue encontrado
        alert(`El elemento "${elementoBuscar}" no se encuentra en el arreglo.`);
    }
}