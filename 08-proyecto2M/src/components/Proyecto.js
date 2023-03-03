import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {trabajos} from '../data/trabajos';

export const Proyecto = () => {
    // El use params lo utilizamos para poder obtener los valores que vienen por la URL de algun componente o RUTEO
    const params = useParams();
    const [proyecto,setProyecto] = useState({});

    //Recuerda que esto se ejecuta como si fuera el document ready
    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo=> params.id === trabajo.id);
        setProyecto(proyecto[0]);
    },[params]);
    return (
        <div>
            <div className='mask'>
                <img src={"/images/" + proyecto.id + ".png"} alt=""></img>
              </div>
            <h1 className='heading'>Proyecto {proyecto.nombre}
            </h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.url}</p>
            <a href={'https://'+proyecto.url} target="_blank" rel='noreferrer'>Ir al proyecto</a>
        </div>
    )
}
