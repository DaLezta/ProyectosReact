import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Peticion } from '../helpers/Peticion';
import { Global } from '../helpers/Global';
import { useParams } from 'react-router-dom';


export const Editar = () => {
  const params = useParams();

  const [articulo, setArticulo] = useState([]);
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState();

  useEffect(() => {
    conseguirArticulo();
    console.log(params.id);
  }, [])

  const conseguirArticulo = async () => {
    //Importamos el URL global y nadamas concatenamos la opcion quenecesitamos
    const url = Global.url + 'articulo/' + params.id;
    //Experamos a que nos responda el metodo de Peticion, por esa razon colocamos el await
    const { datos } = await Peticion(url, "GET") //Helper que creamos parapoder utilizarlo varias veces dependiendo lo que necesitemos

    // //Recordando la estructura de la repuesta, debemos verificar como vamos a obtener los datos (articulos, contador, y el stado)
    if (datos.status == "success") {
      setArticulo(datos.articulo);
    } else {
    }
  }

  const editarArticulo = async (e) => {
    e.preventDefault();
    console.log(e.target.titulo.value);
    
    let datosGuardar = {
      titulo:e.target.titulo.value,
      contenido:e.target.contenido.value,
    }
    //Recojer datos formulario
    // let datosGuardar = formulario;
    // console.log(formulario);

console.log(datosGuardar);
    //Guardar articulo en el backend
    const { datos } = await Peticion(Global.url + "articulo/"+params.id, "PUT", { datosGuardar });
    console.log(datos);
    if (datos.status == "success") {
      setResultado("success");
    } else {
      setResultado("error")
    }
    console.log(datos);
    const fileInput = document.querySelector("#file"); //Sacamos el elemento del file de subida de archvos

    if (datos.status == 'success' && fileInput.files[0]) { //Si es correcta ka subida de la info y aparte existe un archivo se sube
      setResultado("success");

      const formData = new FormData(); //Creamos una variable de form data para meterle la imagen
      formData.append("file0", fileInput.files[0]); //Buscamos el objeto de la imagen que vamos a subir

      //Debemos tomar en cuenta que como pasamos la variable al metodo de peticion asi mismo se debe nombrar para acceder a ella
      const img_subida = await Peticion(Global.url + "subir-imagen/" + datos.articulo_actualizado._id, "POST", { formData }, true); //Mandamos true para variable de archivos parcheada
      console.log(img_subida);
      if (img_subida.datos.status == "success") {
        setResultado("success");
      } else {
        setResultado("error")
      }
    }
  }

  return (
    <div className='jumbo'>
      <h1>Editar articulo</h1>
      <p>Formulario para editar un articulo: {articulo.titulo}</p>
      <strong>{resultado == "success" ? "Articulo Editado con Exito!" : ""}</strong>
      <strong>{resultado == "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>

      <form className='formulario' onSubmit={editarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name='titulo' onChange={cambiado} defaultValue={articulo.titulo}  />
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type="text" name='contenido' onChange={cambiado} defaultValue={articulo.contenido} />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <div className='contenedor_imgs'>
            {articulo.imagen == "default.png" && <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />}
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} className="img-size" />}
          </div>
            
          <input type="file" name='file0' id='file' />
        </div>
        <input type="submit" value='Guardar' className="btn btn-success" />

      </form>

    </div>
  )
}
