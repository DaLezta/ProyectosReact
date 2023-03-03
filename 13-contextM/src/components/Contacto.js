import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {
  const {usuario} = useContext(PruebaContext);
  return (
    <div>
      <h1>Contacto</h1>
      <p>Pagina de Contacto</p>
      {usuario.username == null?(<p></p>):(
        <>
        <p>{usuario.nombre}  {usuario.web}</p>
        <p>{JSON.stringify(usuario)}</p>
        </>
        
        )}
      {/* <p>Dato desde el contexto: {datoDesdeElContexto.titulo}</p> */}
    </div>
  )
}
