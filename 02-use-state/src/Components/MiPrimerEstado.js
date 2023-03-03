import React,{useState} from 'react'

export const MiPrimerEstado = () => {
    const [nombre,setNombre] = useState('Daniel Bustos') //Creamos la variable la cual va poder hacer modificada y a su vez como se va llamar
    //El metodo con el cual vamos a poder hacer una nueva insersion a la variable

    function cambiarNombre(e,nombreFijo){
        setNombre(nombreFijo) //Para poder mandarle nuevos parametros al evento simplemente los mandamos para que se actualizen
        console.log(e.target.value) //El target del evento tiene todo el objeto que este ejecutando, en este caso el boton completo
        //En el cual tiene el value dentro de el.
    }
  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='lavel'>{nombre}</strong>
        <br></br>
        &nbsp;
        <button onClick={e => cambiarNombre(e,'Mirna')}>Cambiar Mirna</button>

        {/* Con el evento e accedemos al target que es el input y con value al valor que este dentro del input */}
        {/* De igual manera el evneot keyup se ejecuta cada vez que levantamos la tecla mientras estemos en el input */}
        <input type="text" onChange={e=> cambiarNombre(e, e.target.value)} placeholder="Cambia el nombre"/> 
    </div>
   
  )
}
