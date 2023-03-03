import React, { useEffect, useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {
    const [noEncontrado, setNoEncontrado] = useState(false);
    const [busqueda, setBusqueda] = useState('');


    //Evento que se ejecuta cuando hay un cambio de una variable en este caso busqueda
    useEffect(() => {
        console.log(busqueda);
        //Filtrar para buscar cualquier coincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
        })


        if (busqueda.length <= 1) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
        } else if (pelis_encontradas.length === 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
            setNoEncontrado(true);
        }
        else {
            setNoEncontrado(false);
        }
        console.log(pelis_encontradas);

        //Actualizar el estado del listado principal con lo que he logrado filtrar
        setListadoState(pelis_encontradas)
        // eslint-disable-next-line
    }, [busqueda])

    const buscarPeli = (e) => {

        //Crear estado y actualizarlo
        console.log(e.target.value);
        //Este al ser un metodo asincrono, necesitamos colocar un use state para cuando se realice el cambio de la variable del usestate
        //Se pueda ejecutar ese metodo
        setBusqueda(e.target.value);


    }


    return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            <form>
                <input type="text"
                    placeholder="Buscar..."
                    name="busqueda"
                    autoComplete='off'
                    value={busqueda}
                    onChange={buscarPeli} />
                <button>Buscar</button>
                <br></br>
                <code className='no-encontrado'>{(noEncontrado === true) ? 'Sin resultados' : ''}</code>
            </form>
        </div>
    )
}
