import { promedio } from "./js/app1.js";
import { validacion } from "./js/app2.js";
import { tablaDeMultiplicar } from "./js/app3.js";
import { impuestoTotal } from "./js/app4.js";
import { buscarEnArreglo } from "./js/app5.js";

const continuar = true

while (continuar){
    let opcion = Number(prompt(`Digite la opcion del ejercicio que deseas: 
        1. Ejercicio - 1.
        2. Ejercicio - 2.
        3. Ejercicio - 3.
        4. Ejercicio - 4.
        5. Ejercicio - 5.
        0. Salir.`));

    switch (opcion) {
        case 1:
            promedio();
            break;

        case 2:
            validacion();
            break;

        case 3:
            tablaDeMultiplicar();
            break;

        case 4:
            impuestoTotal();
            break;

        case 5:
            buscarEnArreglo();
            break;

        case 0:
            alert("Gracias...");
            continuar = false;
            break;
            
        default:
            alert("Opcion no valida, por favor digite una opcion correcta.");
    }
}