import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {
    const [numeroSaludo, setNumeroSaludo] = useState(0);
    const saludosEnCola = useRef(numeroSaludo); //Lo utilizamos para acceder al valor final sin importar como se modifique el state

    useEffect(()=>{
        saludosEnCola.current = numeroSaludo;
        setTimeout(() => {
            console.log('Mensajes en cola'+saludosEnCola.current)
        }, 2000);
    },[numeroSaludo])

    const enviarSaludo = e => {
        setNumeroSaludo(numeroSaludo + 1);
    }
    
    return (
        <div>
            <h1 className='white-text'>Ejemplo con useRef</h1>
            <h2 className='white-text'>Saludos Enviados: {numeroSaludo}</h2>
            <button onClick={enviarSaludo}>Enviar Saludo</button>
            <hr></hr>
        </div>
    )
}
