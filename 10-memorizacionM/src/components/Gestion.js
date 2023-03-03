import React, {useCallback, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {
    const [nombre, setNombre] = useState('');
    const [pagina, setPagina] = useState(1);
    const gestorInput = useRef();
    console.log('Se ha renderizado el componente Gestion');

    const asignarGestor = e =>{
        setNombre(gestorInput.current.value);
    }

    //El hook useCallback() nos sirve para poder memorizar y solo ejecutar una accion cuando se cumpla cierto criterio, es parecido al memo y al effect
    //Asi que aunque el componente en el que estoy se renderize ya no se volvera a memoriizar, recuerda que esto solo funciona para metodos
    const mostrarMensaje = useCallback(() =>{
      console.log('Hola que tal soy un mensaje desde el componente Gestion');
    },[pagina])

  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input type='text' ref={gestorInput} onChange={asignarGestor} placeholder="Introduce el nombre del gestor"></input>
        <h2>Listado de empleados:</h2>
        <p>Los empleados son gestionados por {nombre} vienen de jsonplaceholder...</p>
        <button onClick={() => {setPagina(1)}}>Pagina 1</button> <button onClick={() => {setPagina(2)}}>Pagina 2</button>
        <Empleados pagina={pagina} mensaje={mostrarMensaje}></Empleados>
    </div>
  )
}
