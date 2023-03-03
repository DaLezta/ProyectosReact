import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {
    const [mostrar,setMostrar] = useState(false);
    const caja = useRef();
    const boton = useRef();

    useEffect(() => {//Este se ejecuta despues del hook useLayoutEffect
        console.log('useEffect: Componente Cargado!!!');
        if(caja.current == null){
            return
        }else{

        }

        const {bottom} = boton.current.getBoundingClientRect();
        
        caja.current.style.marginTop = `${bottom +45}px`;

    }, [mostrar])


    useLayoutEffect(() => {//Este hook se ejecuta antes del hook useEffect
        console.log('useLayoutEffect: Componente cargado!!!');
       
    }, []);




    return (
        <div>
            <h1>Ejemplo useEffect y useLayoutEffect</h1>
            <button ref={boton} onClick={() => setMostrar(prev =>{
                console.log(!prev);
             return !prev;
            } )}>Mostrar Mensaje</button>
            {mostrar && (
                <div id='caja' ref={caja}>
                    Hola, soy un mensaje {mostrar}
                </div>
            )}
        </div>
    )
}
