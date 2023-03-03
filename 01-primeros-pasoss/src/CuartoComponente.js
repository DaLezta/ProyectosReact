import React from 'react'

export const CuartoComponente = () => {
    
    function hasDadoClick(e,nombre){
        alert('Has dado click al boton '+nombre)
    }

    function hasDadoDobleClick(e,nombre){
        alert('Has dado click al boton '+nombre)
    }

    function hasEntrado(e,accion){
        console.log('Has'+accion+' del objeto')
    }
    
    function estasDentro(e){
        console.log("Estas dentro del input, Mete tu nombre");
    }

    function estasFuera(e){
        console.log('Estas fuera del input' +e)
    }

  return (
    <div>
        <h1>Eventos en REACT</h1>
        {/* Evento Click */}
        <p>
            <button onClick={e =>hasDadoClick(e,"Daniel Bustos Landa")}>Dame Click</button>
        </p>
        

        {/* Evento Doble Click */}
        <p>
            <button onDoubleClick={e =>hasDadoDobleClick(e,"Daniel Bustos Landa")}>Dame Doble Click</button>
        </p>

        {/* Evento onMouseEnter onMouseLeave */}
        <div id='caja' onMouseEnter={e =>hasEntrado(e,'Entrado')}
                        onMouseLeave={e =>hasEntrado(e,'Salido')}>
                    Pasa por encima
        </div>

        {/* Evento Focus y Blur, Estos metodos son para detectar cuando estas y cuando sales de un objeto */}
        <p>
            <input type="text" 
            onBlur={estasFuera}
            onFocus={estasDentro} placeholder="Introduce tu nombre" />
        </p>
        

    </div>
  )
}
