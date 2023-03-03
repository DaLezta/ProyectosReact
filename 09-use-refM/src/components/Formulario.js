import React, { useRef } from 'react'

export const Formulario = () => {

    const nombre_input = useRef();
    const apellido_input = useRef();
    const correo_input = useRef();
    const miCaja = useRef();

    const mostrar = e => {
        e.preventDefault()
        console.log(nombre_input.current.value)
        console.log(apellido_input.current.value)
        console.log(correo_input.current.value)

        //Mi caja
        console.log(miCaja)
        // Agregamos una clase al elemento que tenemos con la ref
        miCaja.current.classList.add("fondoVerde")
        miCaja.current.innerHTML = "Formulario Enviado!";
    }
    return (
        <div>
            <h1 className='white-text'>Formulario</h1>
            <div ref={miCaja} className="miCaja">
                <h2 className='white-text'>Pruebas con useRef</h2>
            </div>
            <form onSubmit={mostrar}>
                <input placeholder='Nombre' type='text' ref={nombre_input} required></input><br></br>
                <input placeholder='Apellidos' type='text' ref={apellido_input} ></input><br></br>
                <input placeholder='Correo Electronico' type='email' ref={correo_input}></input><br></br>
                <input value='Enviar' type='submit'></input>
            </form>
            
            {/* Seleccionamos el input dependiendo de su useRef */}
            <button onClick={()=> nombre_input.current.select()}>Empezar a rellenar form</button>

        </div>
    )
}
