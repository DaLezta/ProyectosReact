import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

export const MiUsuario = () => {
    const {usuario,getId,getUsuario} = useFetch({datos:null,cargando:true})

    useEffect(() => {
        getUsuario('https://reqres.in/api/users/1')
    }, [])

    return (
        <div>
            <h1>Mi usuario...</h1>
            <p>Datos del usuario:</p>
            <p>{usuario.cargando ? 'Cargando...' : ''}</p>
            <p>{usuario?.datos?.first_name} {usuario?.datos?.last_name} {usuario?.datos?.email}</p>

            <input type='number' className='input_numero' placeholder='Numero de usuario' onChange={getId} name='id'></input>

        </div>
    )
}
