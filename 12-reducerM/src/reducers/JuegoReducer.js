//El state es el estado actual de la variable, tambien le pasamos el action el cual es un objeto que tiene el typo y el valor
//que estamos pasando a esta funcion
export const JuegoReducer = (state = [], action) => {
    //Y como todos los parametros pues podemos acceder al action que es el objeto que mandamos el componente
    //En el cual especificamos el type y el valor que estemos pasando al case
    switch (action.type) {
        case 'crear':
            return [...state, action.payload];

        case 'borrar':
            //Hacemos un filtro de todos los juegos que no concidan con el id seleccionado
            //Esto puesto que nos traera todos los juegos menos el que queremos borrar,y pues simplemente asignamos esos juegos
            //al valor del estado
            return state.filter(juego => juego.id !== action.payload);

        case 'editar':
            //Encontramos el index que vamos a modificar y simplemente dentro del state buscamos ese indice y le pasamos lo que mandamos
            //desde payload
            let indice = state.findIndex(juego => juego.id === action.payload.id)
            state[indice] = action.payload
            //Hacemos un return de todos los elementos del state, si no colocamos los ... estaremos enviando el estado que tenemos en este momento
            return [...state];


        default:
            return state;
    }
}
