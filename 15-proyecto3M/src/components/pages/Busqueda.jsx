import React, { useEffect, useState } from 'react'
import { Peticion } from '../helpers/Peticion';
import { Global } from '../helpers/Global';
import { Listado } from './Listado';
import { useParams } from 'react-router-dom'; //Esto nos permite recojer parametros de la url

export const Busqueda = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulos();
  }, [])

  useEffect(() => {
    conseguirArticulos();
  }, [params])


  const conseguirArticulos = async () => {
    //Importamos el URL global y nadamas concatenamos la opcion quenecesitamos
    const url = Global.url + 'buscar/'+params.busqueda;
    //Experamos a que nos responda el metodo de Peticion, por esa razon colocamos el await
    const { datos, cargando } = await Peticion(url, "GET") //Helper que creamos parapoder utilizarlo varias veces dependiendo lo que necesitemos
    console.log(datos);
      // //Recordando la estructura de la repuesta, debemos verificar como vamos a obtener los datos (articulos, contador, y el stado)
      if (datos.status == "success") {
        setArticulos(datos.articulos);
      } else {
        setArticulos([])
      } 
      setCargando(false)
  }

  return (
    <div className='articulos-agregados'>
      {cargando ? <h1>Cargando...</h1> :
          articulos.length >= 1 ? <Listado articulos ={articulos} setArticulos={setArticulos} conseguirArticulos={conseguirArticulos}></Listado>
          : <h1>No se encontro ningun articulo.</h1>
      }
    </div>
  )
}
