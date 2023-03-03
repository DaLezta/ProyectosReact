import React from 'react';
import PropTypes from 'prop-types'; //Libreria para la verificacion de parametros

export const TercerComponente = ({nombre='Daniel',apellidos,ficha}) => {
 
  return (
    <div className='TercerComponente'>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>
                {nombre}
            </li>
            <li>
                {apellidos}
            </li>
            <li>
                {ficha.altura}
            </li>
        </ul>
    </div>
  )
}

//Con esto podemos validar el tipo de datos que se le esta enviando a nuestro componente, a su vez podemos hacer que sea requerido el dato.
TercerComponente.propTypes ={ //Cuando vamos a utilizar el proptypes en el componente al colocar el nombre se usa en minuscula el propTypes
    nombre:PropTypes.string.isRequired,         //Pero una vez dentro de las validaciones utilizamos con mayuscula PropTypes
    apellidos:PropTypes.string.isRequired, //La propiedad isRequired nos sirve para que sea requerido que envien ese dato dentro del componente
    ficha:PropTypes.object
}

//Podemos crear props por defecto las cuales pueden setear un valor predefinido en el caso de venir vacio el parametro
TercerComponente.defaultProps ={    
    nombre: 'Daniel From DefaultProps', //Esto solo para tener un control de los datos y verificar que ninguno llegue vacio
    apellidos: 'Bustos Landa From DefaultProps'
}