import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {
    const tituloComponente = "Añadir Pelicula";

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    })

    //Esto es para ahorrarnos escribir peliState.titulo ahora nadamas podemos colocar titulo y ya sabemos que hace referencia a peliState
    const { titulo, descripcion } = peliState; //Conseguimos los datos que se encuentran dentro del objeto peliState

    const conseguirDatosForm = e => {
        e.preventDefault();  //Para evitar que se recargue la pantalla como lo es en el caso de los form colocamos esto


        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //alert(titulo + " - " + descripcion);

        //Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(), //Guardamos el tiempo en el que se creo el objeto en milisegundos
            titulo, //Con los nuevos estandares si la variable se va llamar igual a la del objeto no es necesario colocar : y el nombre
            descripcion
        }

        // Guardar el estado
        setPeliState(peli);

        // Actualizar el estado del listado principal
        setListadoState(elementos =>{ //Elementos es todo lo que tiene la variable del metodo setListadoState en ese momento
            return [...elementos,peli]; //Entonces debolvemos todos esos elementos mas el nuevo elemento a ingresar a la variable setState
        })
        // Guardar en el almacenamiento local

        GuardarEnStorage('pelis',peli);

    

    }


    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            {/* Si existe titulo y existe descripcion entones muestra el titulo */}
            <strong>
                {(titulo && descripcion) && 'Has creado la pelicula: ' + titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input type="text" placeholder="Titulo" id='titulo' name='titulo' />
                <textarea placeholder="Descripcion" id='descripcion' name='descripcion'></textarea>
                <input type="submit" id='save' value="Guardar" />
            </form>
        </div>
    )
}
