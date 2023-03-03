import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
    <h1 className='heading'>Contacto</h1>

   <form className='contact' action='mailto:daniellanda999@gmail.com'>
    <input type="text" placeholder="Nombre"></input>
    <input type="text" placeholder="Apellidos"></input>
    <input type="text" placeholder="Email"></input>
    <textarea placeholder="Motivo de contacto"></textarea>
    <input type="submit" value='Enviar'></input>

   </form>

  </div>
  )
}
