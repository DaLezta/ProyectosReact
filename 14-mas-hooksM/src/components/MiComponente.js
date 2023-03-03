import React, { useId } from 'react'

export const MiComponente = () => {
    const id = useId();
    console.log(id);
  return (
    <div>
        <h1>Hook use ID</h1>
        <input id={id} placeholder="Nombre" name='nombre'></input>
    </div>
  )
}
