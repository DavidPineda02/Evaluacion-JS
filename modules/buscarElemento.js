export const buscarElemento = (lista, elemento) => {
    // Recorrer el arreglo con un ciclo
    for (let elementoI of lista) {

        // Comparar el elemento actual con el elemento buscado
        if (elementoI === elemento) {
            // Retornar true si se encuentra el elemento
            return true;
        }
    }
    
    // Retornar false si no se encuentra el elemento
    return false;
};