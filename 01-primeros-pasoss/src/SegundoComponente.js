import React from 'react'

export const SegundoComponente = () => {

    const libros =["Harry Potter","Juego de tronos","Juegos del Hambre"];
//const libros=[];
  return (
    <div className='segundo-componente'>
        <h1>Listado de libros</h1>
        {/* Condicional IF con ternaria */}
        {libros.length >=1 ?
        (
            <ul>
            {
                libros.map((libro,indice) =>{
                    return <li key={indice}>Libro: {libro}</li>;
                })
            }
            </ul>
        ):(
        <p>No hay libros</p>
        )
        }
    </div>
    
  )
}
