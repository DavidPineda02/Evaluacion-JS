// Ejercicio 2:
// Temas: Operadores lógicos · Condicionales · Función expresada.
// Enunciado analítico:

import { validarAcceso } from "../modules/validarAcceso.js"

// Una empresa maneja un sistema básico de autenticación. El aprendiz debe programar un validador que permita el ingreso solo si el usuario cumple dos condiciones: 

// 1. Es mayor de edad.
// 2. Tiene una contraseña válida (comparación exacta).
// El sistema debe proporcionar mensajes claros de aceptación o rechazo.

// Requerimientos:
// • Crear una función expresada const validarAcceso = function(){}.
// • Validar edad con operadores relacionales.
// • Validar contraseña con comparación estricta.
// • Usar operadores lógicos para evaluar ambas condiciones.
// • Devolver un mensaje indicando si el acceso fue concedido o denegado.

// Entradas solicitadas:
// • Edad del usuario.
// • Contraseña digitada.

// Salidas:
// • Mensaje de acceso. 

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