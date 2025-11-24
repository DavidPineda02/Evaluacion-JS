export const generarTabla = (numero) => {
    // Crear un arreglo para almacenar los resultados
    let tabla = [];

    // Bucle para generar la tabla de multiplicar del 1 al 10
    for (let i = 1; i <= 10; i++) {

        // Agregar el resultado de la multiplicación al arreglo
        tabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    
    // Retornar el arreglo con la tabla de multiplicar
    return tabla;
}