import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, mi nombre es <strong>Daniel Bustos Landa</strong>, soy Desarrollador Web Full Stack,
        y ofrezco mis servicios de <strong>programacion</strong> y <strong>desarrollo </strong>en todo tipo de proyectos web</h1>
      <h2 className='a_principal'>
        Te ayudo a reducir los tiempos de cada uno de tus procesos, asi como darle visibilidad a cada uno de tus productos o empresa. <Link to="/Contacto" className='jello-horizontal'> Contacta conmigo</Link> 
      </h2>
      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>
          Estos son algunos de mis trabajos de desarrollo web.
        </p>
        <ListadoTrabajos limite='3'></ListadoTrabajos>
      </section>
    </div>
  )
}
