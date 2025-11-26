
export const validarAcceso = function(edad, psw){
    // Variable para almacenar el estado de acceso
    let acceso = false;
    
    // Verificar si la edad es mayor o igual a 18 y la contraseña es correcta
    if(edad >= 18 && psw === "1234"){
        // Conceder acceso si ambas condiciones se cumplen
        return acceso = true;
    } else {
        // Denegar acceso si alguna condición no se cumple
        return acceso;
    }
}