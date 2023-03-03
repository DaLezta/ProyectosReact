import React from 'react'
import { Global } from '../helpers/Global';
import { Peticion } from '../helpers/Peticion';
import { Link } from 'react-router-dom';


export const Listado =({ articulos, setArticulos,conseguirArticulos}) => {
  
  const eliminar = async(id) => {
    let {datos} = await Peticion(Global.url+"articulo/"+id,"DELETE");
    console.log(datos);
    if(datos.status =="success"){
      let articulosActualizados = articulos.filter(articulo => articulo._id !== id);
      setArticulos(articulosActualizados);
      //conseguirArticulos();
    }
  }

  return (
    articulos.map(articulo => {
      return (
        <article key={articulo._id} className='articulo-item'>
          <div className='mascara'>
            {articulo.imagen == "default.png" && <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />}
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} alt="" />}
          </div>
          <div className='datos'>
            <h3 className='title'><Link to={"/articulo/"+articulo._id}>{articulo.titulo}</Link></h3>
            <p className="description">{articulo.contenido}</p>
            <Link to={"/editar/"+articulo._id} className='edit'>Editar</Link>
            <button className="borrar" onClick={(e) => {
              eliminar(articulo._id)
            }
            }>Borrar</button>
          </div>
        </article>
      )
    })
  )
}
