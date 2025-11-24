import { validarAcceso } from "../modules/validarAcceso.js"

// Función principal que maneja la interacción con el usuario
export function validacion(){
    // Solicitar edad y contraseña al usuario
    let edad = Number(prompt("Ingrese su edad:"));
    let psw = prompt("Ingrese su contraseña:");

    // Validar el acceso usando la función importada
    if(validarAcceso(edad, psw)){
        // Mostrar mensaje si el acceso es concedido
        alert("Acceso concedido.");
    } else {
        // Mostrar mensaje si el acceso es denegado
        alert("Acceso denegado.");
    }
}