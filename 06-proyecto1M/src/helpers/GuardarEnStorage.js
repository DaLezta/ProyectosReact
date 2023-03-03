export const GuardarEnStorage = (clave,elemento) => {
    // Conseguir los elementos del local 
    let elementos = JSON.parse(localStorage.getItem(clave));

    // Comprobar si es un array
    if (Array.isArray(elementos)) {//Esta condicion comprueba si un elemento o una variable es un array
        //Guardar dentro del array un elemento nuevo
        elementos.push(elemento);
    } else {
        //Crear un array con la nueva 
        elementos = [elemento];
    }
    // Guardar en el local Storage
     //Convierte mi array de objetos en un jsonstrign
    localStorage.setItem(clave, JSON.stringify(elementos))

    // Devolver el objeto guardado
    return elemento;
}