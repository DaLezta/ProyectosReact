import React from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

const {estado,enviado,cambiado} = useForm({});


  return (
    <div className='contenedor'>
      <h1>Formulario para almacenar un curso</h1>
      <p>Curso Guardado: {'titulo' in estado ? estado.titulo :''}</p>

      <p className='objeto'>{JSON.stringify(estado)}</p>


      <form className='mi-formulario' onSubmit={enviado}>
        <input type='text' placeholder="Titulo:" name="titulo" required onChange={cambiado}></input>
        <input type='number' placeholder="Año de publicacion:" name="anio" required onChange={cambiado}></input>
        <textarea name='descripcion' placeholder='Descripcion: ' onChange={cambiado}></textarea>
        <input type='text' placeholder="Autor:" name="autor" onChange={cambiado}></input>
        <input type='email' placeholder="Correo de contacto:" name="email" onChange={cambiado}></input>
        <input type='submit' value='Enviar'></input>
      </form>
    </div>
  )
}
