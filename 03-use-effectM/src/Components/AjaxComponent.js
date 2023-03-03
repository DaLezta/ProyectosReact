import React, { useEffect, useState } from 'react'
import '../App.css';


export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]); //SE INICIALIZA EL STATE CON UN ARRAY VACIO 
    const [cargando, setCargando] = useState(true);
    const [errores, seterrores] = useState('');

    //GENERICO / BASICO
    //GENERAMOS UN ARRAY DE OBJETOS CON UNOS DATOS ESTATICOS LOS CUALES VAMOS A CONSULTAR EN LA SECCION DE ABAJO
    function getUsuariosEstaticos() {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Daniel",
                "last_name": "Bustos",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ])
    }

    const getUsuariosAjaxPms = () =>{
        fetch("https://reqres.in/api/users?page=1") //COLOCAMOS LA API A LA CUAL VAMOS A CONSULTAR, YA QUE CON EL METODO FETCH PODEMOS ACCESAR A APIS
        .then(respuesta => respuesta.json())  //COLOCAMOS UNA PROMESA PARA QUE CUANDO RETORNE ALGO LO CONVIERTA A JSON
        .then(resultado_final =>{ //Y COMO SEGUNDA PROMESA AHORA SI PODEMOS OBTENER LOS DATOS NECESARIOS 
            setUsuarios(resultado_final.data); //AQUI POR ESO COLOCAMOS QUE EL RESULTADO FINAL QUE YA ES EL OBJETO EN JSON .DATA PORQUE 
            console.log(resultado_final)//LA API ASI DEVUELVE EL RESULTADO COMO DATA{}
        },
        error=>{
            console.log(error);
        })
    }

    
    async function getUsuariosAjaxAW(){ //TAMBIEN DEBEMOS COLOCAR EL ASYNC PORQUE EL AWAIT SOLO ES VALIDO EN FUNCIONES ASINCRONAS
        try{
        const peticion = await fetch("https://reqres.in/api/users?page=1") //ESTO LO QUE VA HACER ES ESPERARSE A QUE EL METODO FETCH ME RESPONDA

                //COLOCAMOS LOS CORCHETES POR QUE LE ESTAMOS DICIENDO QUE DATA SERA DEL TIPO OBJETO YA QUE A PETICION LA ESTAMOS PARCEANDO A JSON.
                const {data} = await peticion.json(); //TAMBIEN COLOCAMOS EL AWAIT POR QUE RECORDEMOS QUE ESTAMOS ESPERANDO A QUE PETICION OBTENGA EL VALOR DEL FETCH 
                //Y A SU VEZ AQUI ESPERAMOS A QUE PETICION TENGA ALGUN RESULTADO PARA PODER SETEARLO A DATA.
                setTimeout(()=>{
                    setUsuarios(data);
                    setCargando(false);
                },2000)
        }catch(error){
            setTimeout(()=>{
                console.log(error.message)
                seterrores(error.message)
            },2000)
        }
    }

    useEffect(() => { //EJECUTAMOS SOLO UNA VEZ AL CARGAR EL COMPONENTE
       // getUsuariosEstaticos(); //EJECUTAMOS EL METODO GETUSUARIOSESTATICOS
       //getUsuariosAjaxPms()
       getUsuariosAjaxAW()
    }, []);


    if(errores !=""){
        return( //PODEMOS RETORNAR LOS RETURNS QUE NOSOTROS QUERAMOS 
        <div className='errores'>
            {errores}
        </div>
    );
    }
    //CUANDO ESTA TODO CARGANDO
    else if(cargando == true){
        return( //PODEMOS RETORNAR LOS RETURNS QUE NOSOTROS QUERAMOS 
        <div className='cargando'>
            Cargando datos...
        </div>
    );
    }else{
        //CUANDO TODO HA IDO BIEN
    return (
        <div>
            <h2>Listado de usuarios via AJAX</h2>
            {
                //RECORREMOS EL OBJETO DE USUARIOS Y CUARDAMOS EL VALOR EN VALUE, DE IGUAL MANERA PODEMOS COLOCAR UN INDICE 
                //Y COLOCARLO EN LA KEY YA QUE RECORDEMOS QUE SIEMPRE NOS PIDE COLOCAR UNA KEY PARA TEMAS DE PERFORMANCE
                usuarios.map(function(value,i){
                    console.log(value)
                    return(<li key={value.id}><img src={value.avatar} className="imagen"></img>{value.id}- {value.first_name} {value.email}</li>
                    )
                })
            }
        </div>
        )
    } 
}
