import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Peticion } from '../helpers/Peticion';
import { Global } from '../helpers/Global';


export const Crear = () => {

  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState();

  const guardarArticulo = async (e) => {
    e.preventDefault();

    //Recojer datos formulario
    let datosGuardar = formulario;
    console.log(formulario);

    //Guardar articulo en el backend
    const { datos } = await Peticion(Global.url + "crear", "POST", { datosGuardar });
    if (datos.status == "success") {
      setResultado("success");
    } else {
      setResultado("error")
    }

    const fileInput = document.querySelector("#file"); //Sacamos el elemento del file de subida de archvos

    if (datos.status == 'success' && fileInput.files[0]) { //Si es correcta ka subida de la info y aparte existe un archivo se sube
      setResultado("success");

      const formData = new FormData(); //Creamos una variable de form data para meterle la imagen
      formData.append("file0", fileInput.files[0]); //Buscamos el objeto de la imagen que vamos a subir

      //Debemos tomar en cuenta que como pasamos la variable al metodo de peticion asi mismo se debe nombrar para acceder a ella
      const img_subida = await Peticion(Global.url + "subir-imagen/" + datos.articulo._id, "POST", { formData }, true); //Mandamos true para variable de archivos parcheada

      if (img_subida.datos.status == "success") {
        setResultado("success");
      } else {
        setResultado("error")
      }
    } 
  }

  return (
    <div className='jumbo'>
      <h1>Crear articulo</h1>
      <p>Formulario para crear un articulo</p>
      <strong>{resultado == "success" ? "Articulo Guardado con Exito!" : ""}</strong>
      <strong>{resultado == "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>

      <form className='formulario' onSubmit={guardarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name='titulo' onChange={cambiado} />
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type="text" name='contenido' onChange={cambiado} />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <input type="file" name='file0' id='file' />
        </div>
        <input type="submit" value='Guardar' className="btn btn-success" />

      </form>

    </div>
  )
}
