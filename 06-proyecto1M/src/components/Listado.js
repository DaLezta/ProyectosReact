import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

// OBTENEMOS COMO PARAMETROS LOS DATOS QUE TENEMOS EN NUESTRO COMPONENTE PADRE EL CUAL AHORA CONTIENE EL METODO SETLISTADOSTATE
export const Listado = ({listadoState,setListadoState}) => {
    // La primera variable es para poder acceder a los datos que tiene y el segundo parametro es para setear uno nuevo
    //const [listadoState, setListadoState] = useState([]); //Creamos la variable listadoState la cual en un principio se inicializa con []

    const [editar,setEditar] = useState(0);

    useEffect(() => {
        console.log("Componente del listado de peliculas cargado!");
        conseguirPeliculas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); //Se va ejecutar solo una vez cuando se carga el componente

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        setListadoState(peliculas);
        return peliculas;
    }


    const borrarPeli = (id) =>{
        // Conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas(); //GUARDAMOS EN LA VARIABLE LO QUE RETORNA EL METODO CONSEGUIR PELICULAS

        // Filtar esas peliculas para que elimine del array la que no quiero
        
        //Recorremos el elemento de pelis y nos quedamos solo con los elementos que cumplan la condicion
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !==parseInt(id)); //Lo que hace es excluir del array ciertos elementos con determinada condicion
        //Explicacion: Va dejar en el array solo los elementos que no conincida con su ID para dejar todos menos el que selecciono
        
        // Actualizar estado del listado
        setListadoState(nuevo_array_pelis);

        // Actualizar los datos en el local storage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis)); //Conseguimos un json string de nuestro array
       // alert(id)
    }


    return (
        <>
            {/* Si el listado state es diferente de null o vacio entonces recorre el objeto
        {listadoState != null && listadoState.map(peli =>{
            //Colocar siempre el identificador key en algunos de los atributos del DOM para efectos de react
            console.log(peli);
            return(<article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button className="edit btn_space" id={peli.id}>Editar</button>
            <button className="borrar">Borrar</button>
        </article>)
        })} */}


            {/* PODEMOS UTILIZAR LA OPERACION TERNARIA PARA HACER CONDICIONES, SI LISTADOSTATE ES DIFERENTE DE NULL ENTONCES
        RECORRE EL OBJETO PARA MOSTRAR LAS PELIS, DE LO CONTRARIO : MUESTRA UN MENSAJE QUE DIGA QUE NO HAY PELIS CARGADAS */}
            {listadoState != null ?
                 listadoState.map(peli => {
                    //Colocar siempre el identificador key en algunos de los atributos del DOM para efectos de react
                    
                    return (<article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>

                        <button className="edit btn_space" onClick={() => {setEditar(peli.id)}}>Editar</button>
                        {/* Se coloca una funcion vacia en el onclick para que al cargar no muestre ningun mensaje o ejecucion */}
                        <button className="borrar" onClick={() =>{borrarPeli(peli.id)}}>Borrar</button>

                        {/* Aparece formulario de editar */}


                        {editar === peli.id &&
                         (<Editar peli={peli} conseguirPeliculas = {conseguirPeliculas}
                         setEditar={setEditar}
                         setListadoState={setListadoState}
                         ></Editar>)}
                    </article>)
                })
                : <h2>No existe ninguna pelicula cargada</h2>
            }
        </>
    )
}
