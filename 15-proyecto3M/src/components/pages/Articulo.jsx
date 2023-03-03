import React, { useEffect, useState } from 'react'
import { Peticion } from '../helpers/Peticion';
import { Global } from '../helpers/Global';
import { Listado } from './Listado';
import { useParams } from 'react-router-dom';

export const Articulo = () => {

  const [articulo, setArticulo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, [])


  const conseguirArticulo = async () => {
    //Importamos el URL global y nadamas concatenamos la opcion quenecesitamos
    const url = Global.url + 'articulo/' + params.id;
    //Experamos a que nos responda el metodo de Peticion, por esa razon colocamos el await
    const { datos, cargando } = await Peticion(url, "GET") //Helper que creamos parapoder utilizarlo varias veces dependiendo lo que necesitemos

    // //Recordando la estructura de la repuesta, debemos verificar como vamos a obtener los datos (articulos, contador, y el stado)
    if (datos.status == "success") {
      setArticulo(datos.articulo);
    } else {
    }
    setCargando(false)
  }

  return (
    <div className='jumbo'>
      {cargando ? <h1>Cargando...</h1> : (
          <div>
            {articulo.imagen == "default.png" && <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />}
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} className="img-size" />}
            <h1>{articulo.titulo}</h1>
            <p>{articulo.contenido}</p>
            <span>{articulo.fecha}</span>
            
          </div>
        ) 
      }
    </div>
  )
}

