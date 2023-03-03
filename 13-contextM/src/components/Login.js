import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {
  const {usuario,setUsuario} = useContext(PruebaContext);



  const guardarDatos = e => { 
    e.preventDefault();
    
    const usuario = {
      username:e.target.username.value,
      nombre:e.target.nombre.value,
      web:e.target.web.value
    }

    setUsuario(usuario)
    

  }
  return (
    <div>
      <h1>Login</h1>
      <p>Pagina de Login</p>

      <form className='login' onSubmit={guardarDatos}>
        <input type='text' name='username' placeholder="Introduce el usuario"></input>

        <input type='text' name='nombre' placeholder="Introduce el nombre"></input>

        <input type='text' name='web' placeholder="Introduce tu web"></input>

        <input type='submit' value="Enviar"></input>
      </form>
    </div>
  )
}
