import { useState } from "react";


export const useForm = (objetoInicial = {}) => {
  //({target}) es la equivalencia a colocar e.target, por que ya sabemos que viene el e asi que directamente colocamos el target en {}
  const [formulario, setFormulario] = useState(objetoInicial);

  const serializarFormulario = (formulario) => {
    const form_data = new FormData(formulario);
    const objetoCompleto = {};

    //Iteramos nuestro form_data y le sacamos los valores que tiene dentro como lo es el name y value que es esta estructura {name:value}
    //De nuestro formulario
    for (const [name, value] of form_data) {
      objetoCompleto[name] = value;
    }
    return objetoCompleto;
  }


  const enviado = (e) => {
    e.preventDefault();

    let curso = serializarFormulario(e.target);
    console.log(curso);
    setFormulario(curso)

    //Podemos agregar una clase especifica a algun elemento del DOOM, esto puede ser por la clase o por su id con # como en jquery
    // document.querySelector('.objeto').classList.add('enviado')

  }

  const cambiado = ({ target }) => {
    //Sacamos del objeto target el valor de name y value
    const { name, value } = target;

    setFormulario({
      ...formulario,//Expandimos el objeto osea que tomamos todos y cada uno de sus valores y los actualizamos con los elementos sacados
      [name]: value //Especificamos cual campo especificamente del objeto vamos a alterar
    });
  }


  return {
    formulario: formulario,
    enviado,
    cambiado
  }
}
