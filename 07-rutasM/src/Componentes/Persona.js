import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    const { nombre, apellido } = useParams();
    const navegar = useNavigate();
    
    const enviar = (e) => {
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        let url = `/persona/${nombre}/${apellido}`;
        console.log(url);
        navegar(url);

    }
    return (
        <div>
            <h1>Pagina de Persona:{nombre} {apellido}</h1>
            <p>Esta es la pagina de Persona</p>

            <form onSubmit={enviar}>
                <input type="text" name="nombre"></input>
                <input type="text" name="apellido"></input>
                <input type="submit" name="enviar" value="enviar"></input>
            </form>
        </div>
    )
}
