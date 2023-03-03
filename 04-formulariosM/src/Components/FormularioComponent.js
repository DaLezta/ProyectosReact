import React, { useState } from 'react'

export const FormularioComponent = () => {
    const [usuario,setUsuario] = useState({})



    function ConseguirDatosFormulario(e){
        e.preventDefault();
        let datos= e.target;
        let usuario ={
            nombre:datos.nombre.value,
            apellido:datos.apellido.value,
            genero:datos.genero.value,
            bio:datos.biografia.value
        }
        console.log(usuario)
        setUsuario(usuario)
    }

    function cambiarDatos(e){
        let name_del_input =e.target.name;
        //let usuario_para_modificar = usuario;

        //usuario_para_modificar[name_del_input] = e.target.value;

        //Esto se realiza por que no podemos actualizar solo un pedaso del objeto
        setUsuario(estado_previo =>{ //utilizar funcion de call back, capturar el estado previo que es lo que ya esta guardado
            return{ //Los ... nos sirven para traer todos los elementos del objeto excepto el que estamos cambiando para poder hacer una actualizacion del objeto
                ...estado_previo, //Mantenemos todo lo que ya exista dentro del objeto
                //Aqui decimos especificamente cual es el elemento del objeto que vamos a modificar, manteniendo los datos de objeto anterior con los ...
                [name_del_input]: e.target.value //Y las que encuentre nuevas que las anexe al objeto
            //Por ejemplo si yo coloco nombre, ese valor no se va expandir en todo el objeto para poder modificarlo    
            }
            
        })
    }


  return (
    <div>
        <h1> Formulario component</h1>
        {/* Si se cumple la conficion que se ejecute lo que esta en parentesis  */}
        {usuario.bio && usuario.bio.length >=1 &&
        (
          <div className='informacion'>
            {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es {usuario.bio}
            </div>  
        )
        }

        <form onSubmit={ConseguirDatosFormulario}>
            <input type="text" name="nombre" placeholder='Nombre' onChange={cambiarDatos}></input>
            <input type="text" name="apellido" placeholder='Apellido'onChange={cambiarDatos}></input>
            <select name="genero"onChange={cambiarDatos}>
                <option value='Hombre'>Hombre</option>
                <option value='Mujer'>Mujer</option>
            </select>
            <textarea  name="biografia" placeholder='Biografia'onChange={cambiarDatos}></textarea>
            <input type='submit' value="enviar"></input>
        </form>
    </div>
  )
}
