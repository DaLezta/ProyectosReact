import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {
  // Para poder acceder al valor que esta dentro de nuestro useContext simplemente lo importamos y lo guardamos en una variable
  const compartida = useContext(PruebaContext);
  //const {usuario} = useContext(PruebaContext);
  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de inicio</p>
      {compartida.usuario == null ? (<p></p>):(<p>{compartida.usuario.nombre}  {compartida.usuario.web}</p>)}
      
      {/* <p>{usuario.nombre}</p> */}
      {/* <p>Valor compartido: <strong>{JSON.stringify(compartida)}</strong></p> */}
    </div>
  )
}
