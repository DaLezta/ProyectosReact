import { useState } from 'react'

export const useFetch = (objetoInicial ={}) => {
    const [usuario, setUsuario] = useState({objetoInicial});

    const getUsuario = async (url) => {
        setUsuario({
            cargando: true
        })
        setTimeout(async() => {
            console.log('Iniciando consulta de datos');
            const peticion = await fetch(url);
            const { data } = await peticion.json();
            setUsuario({
                datos: data,
                cargando: false
            });
        }, 2000);

    }

    const getId = e => {
        let id = parseInt(e.target.value);
        let url = 'https://reqres.in/api/users/' + id;
        if (id > 0) {
            getUsuario(url);
        }

    }

    
  return {
    getId,
    getUsuario,
    usuario:usuario
  }
}
