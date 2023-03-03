import React, { useEffect, useReducer } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer'


//Creamos el metodo init el cual en primera instancia lo que hace es obtener los elementos del local storage para poderlos colocar dentro
//de nuestro estado, y si no existe el local lo que hace es colocar un array vacio
const init = () => {
  return JSON.parse(localStorage.getItem('juegos')) || [];
}

export const MisJuegos = () => {
  //Creamos nuestro useReducer, el cual se llamara a la varaible "juegoos", en la cual podemos acceder al reducer
  //Mediante dispatch, esto es lo mismo que un setJuegos, posteriormente al reducer se le deben colocar 3 parametros de entrada
  //Primero el archivo reducer donde va realizar las peticiones, despues la inicializacion de la variable del stado
  //y posterior mente la inicializacion que en este caso es el init
  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  //Colocamos dentro del local lo que tenga el estado juegos, esto se ejecuta una vez al inicio y cuando la variable
  //de estado ha sido modificada
  useEffect(() => {
    localStorage.setItem('juegos', JSON.stringify(juegos))
  }, [juegos]); // Cuando la variable juegos se modifica

  const conseguirDatosForm = e => {
    e.preventDefault()

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value
    }

    //Creamos el objeto que vamos a enviar al dispatch, el cual contiene el type que seria el case dentro de JuegoReducer
    //y tambien anexamos el payload que simplemente es el valor o los valores que vamos a insertar dentro del estado
    const accion = {
      type: 'crear',
      payload: juego
    };

    dispatch(accion)

    console.log(juegos)


  }

  const borramelo = id =>{
    const action = {
      type:'borrar',
      payload:id
    };
    dispatch(action)
  }

  const editar = (e,id) =>{
    console.log(e.target.value);

    let juego = {
      id: id,
      titulo: e.target.value,
      descripcion: e.target.value
    }

    const action = {
      type:'editar',
      payload:juego
    };
    dispatch(action)
  }


  return (
    <div>
      <h1>Estos son mis video juegos.</h1>

      <p>Numero de videojuegos: {juegos.length}</p>

      <ul>
        {
          juegos.map(juego => {
            return (
              <li key={juego.id}>{juego.titulo}
                &nbsp; <button onClick={e => borramelo(juego.id)}> X</button>
                <input type='text' onBlur={e => editar(e,juego.id)}></input>
              </li>
              
            )
          })
        }
      </ul>

      <h3>Agregar Juego</h3>

      <form onSubmit={conseguirDatosForm}>
        <input type='text' name='titulo' placeholder='Titulo'></input>
        <textarea name='descripcion' placeholder='Descripcion'></textarea>
        <input type='submit' value="Guardar"></input>
      </form>
    </div>
  )
}
