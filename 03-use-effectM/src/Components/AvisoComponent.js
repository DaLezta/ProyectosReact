import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    //Se ejecuta cuando carga el componente, y se ejecuta una vez por que no tenemos parametros dentro del []
    useEffect(()=>{
        alert('El componente AvisoComponent esta cargado')

        //Cuando se desmonta el componente, esto nos sirve para ver en que momento un componente ya no 
        //Esta visible
        return()=>{
            alert('Componente desmontado')
        };
    },[])//Aqui colocamos un arreglo vacio para poder indicar que solo se va ejecutar una sola vez

  return (
    <div>
        <hr></hr>
        <h3>Saludos Daniel Que tal estas?</h3>
        <button onClick={e=>{
            alert('Bienvenido')
        }}>Mostrar alerta</button>
    </div>
  )
}
