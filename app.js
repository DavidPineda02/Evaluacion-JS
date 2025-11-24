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
            cajero();
            break;

        case 3:
            factura();
            break;

        case 4:
            numeros();
            break;

        case 5:
            calculadora();
            break;

        case 0:
            alert("Gracias...");
            continuar = false;
            break;
            
        default:
            alert("Opcion no valida, por favor digite una opcion correcta.");
    }
}