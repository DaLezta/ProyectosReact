import React, { useMemo, useRef, useState } from 'react'

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [contador,setContador] = useState(6349);
  const inputDescripcion = useRef()

  const guardarTareas = e => {
    e.preventDefault();
    if (e.target.descripcion.value.length > 2) {
      //TAREAS ACTUALIZADAS VA SER IGUAL A LAS todas las tareas que estan en el array mas la tarea que se va agregar
      let tareas_actualizadas = [...tareas, e.target.descripcion.value]
      setTareas(tareas_actualizadas)
      inputDescripcion.current.value = '';
    } else {
      alert('Introduce una palabra completa');
    }
  }

  const borrarTarea = id => {
    //FILTAR LAS TAREAS
    //Seleccionamos unicamente las tareas que no sean iguales al id seleccionado
    let nuevas_tareas = tareas.filter((tarea, index) => index !== id);
    //Con eso tendriamos el array de cuales son las peliculas que van a quedar en el nuevo array

    //GUARDAR EN EL NUEVO ESTADO DE TAREAS
    setTareas(nuevas_tareas);
  }

  const sumarAlContador = e =>{
    setContador(contador + 1);
  }

  const contadoresPasados = (acumulacion) =>{
    for (let index = 0; index < acumulacion; index++) {
      console.log('Ejecutando acumulacion de contadores del pasado...');

    }
    return `<h3>Contador manual de tareas: ${acumulacion} </h3>`;
  }

  // Solo se ejecuta el metodo cando se hace la modificacion de la variable de contador
  const memoContadores = useMemo(()=>contadoresPasados(contador),[contador])


  return (
    <div className='tareas-container'>
      <h1>Mis tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type='text' name="descripcion" placeholder='Describe la tarea' ref={inputDescripcion}></input>
        <input type='submit' value='Guardar'></input>
      </form>
      <h3>{memoContadores}</h3>
      <button onClick={sumarAlContador}>Sumar</button>
      <h3>Lista de tareas:</h3>
      <ul>
        {
          tareas.map((tarea, indice) => {
            return (
              <li key={indice}>
                {tarea}
                &nbsp;
                <button onClick={() => borrarTarea(indice)}>X</button>
              </li>
            )
          })
        }

      </ul>
    </div>
  )
}
