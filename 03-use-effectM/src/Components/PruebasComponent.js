import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {


const [usuario,setUsuario] = useState('');
const [fecha,setFecha] = useState('18-04-1999');
const [contador,setContador] = useState(0);

function modUsuario(e){
    setUsuario(e.target.value);
}

function cambiarFecha(){
    setFecha(new Date().toLocaleDateString());
}

//Cuando como segundo parametro mandamos vacio en llaves solo se va ejecutar una vez
useEffect(()=>{ //Esta es una funcion anonima la cual se ejecuta al cargar el componente y tambien cuando el componente es modicado
    //Siempre se va lanzar cuando se produce un cambio en un componete, o en alguna funcion
    console.log('Has cargado el componente')
},[])

//Se ejecuta solo si cambio el usuario
//Podemos mandar como parametros objetos los cuales si se realiza un cambio haga alguna accion dentro del componente
//Por ejemplo este solo se ejecuta solo cuando a la variable usuario se le ha hecho una modificacion
useEffect(()=>{ 
    setContador(contador+1);
    console.log('Has modificado el usuario:' +contador+ ' Veces')
},[usuario,fecha]) //Detecta cambios en cualquiera de las dos variables


  return (
    <div>
        <h1>El efecto</h1>
        <strong className={contador>=10? 'red':''}>{usuario}</strong>
        <br></br>
        <strong >{fecha}</strong>
        <p>
            <input type="text" 
            onChange={modUsuario} 
            placeholder="Cambia el nombre">
            </input>
            <button onClick={cambiarFecha}>Cambia fecha</button>
        </p>
        {/* Podemos hacer condiciones las cuales manden a ejecutar otros componentes de nuestro proyecto */}
        {usuario =='Daniel Bustos' ?<AvisoComponent/>:''}
    </div>
  )
}
