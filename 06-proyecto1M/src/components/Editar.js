import React from 'react'

export const Editar = ({peli,conseguirPeliculas,setEditar,setListadoState}) => {
    const titulo_componente = 'Editar Pelicula';


    const guardarEdicion = (e, id) =>{
      e.preventDefault()
      //Conseguir el target del evento
      let target = e.target;
      console.log(target);
      //Buscar el indice del objeto de la pelicula a actualizar
      const pelis_almacenadas = conseguirPeliculas();
      const indice = pelis_almacenadas.findIndex(peli => peli.id === id); 

      //Crear un objeto con ese indice, con titulo y descripcion del formulario
      let peli_actualizada ={
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      }

      //Actualizar el elemento con ese indice
      pelis_almacenadas[indice] = peli_actualizada

      //Guardar el nuevo array de objetos en el local storage
      localStorage.setItem("pelis",JSON.stringify(pelis_almacenadas))

      setListadoState(pelis_almacenadas);
      setEditar(0);


      
    }

  return (
    <div className='edit_form' onSubmit={e => guardarEdicion(e,peli.id)}>
        <h3 className='title'>{titulo_componente}</h3>
        <form>
            <input type="text" name='titulo' className='titulo_editado' defaultValue={peli.titulo}></input>
            <br></br>
            <textarea defaultValue={peli.descripcion} className='titulo_editado' name='descripcion'></textarea>
            <br></br>
            <input type='submit' className='editar' value='Actualizar'></input>
        </form>
        </div>
  )
}
