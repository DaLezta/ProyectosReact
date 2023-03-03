//IMPORTAR MODULOS DE REACT / DEPENDENCIAS
import React from "react";


//FUNCION DEL COMPONENTE
const MiComponente =()=>{ //El componente se debe llamar igual que el nombre del archivo (No obligatorio)
    // let nombre = 'Daniel';
    // let web = 'daniel.com';

    let usuario = {
        nombre: 'Daniel',
        apellidos: 'Bustos Landa',
        web: 'Daniel.com'
    }

    console.log(usuario)
    return (
        <div className="MiComponente">
            <hr></hr>
            <p>Este es mi primer componete</p>
            <h3>Datos del usuario: </h3>
            <ul>
                <li>
                    Nombre : <strong>{usuario.nombre}</strong>
                </li>
                <li>
                    Nombre : <strong>{usuario.apellidos}</strong>
                </li>
                <li>
                    Web : <strong>{usuario.web}</strong>
                </li>
            </ul>
        </div>
    ) 
}

//EXPORTAR EL COMPONENTE A TODAS LAS PAGINAS
export default MiComponente; 