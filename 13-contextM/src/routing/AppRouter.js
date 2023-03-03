import React, { useContext } from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Acerca } from '../components/Acerca';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {
  //Para poder utilizar las propiedades que vienen dentro del context es necesario utilizar directamente la destructuracion de datos
  //Eso siempre y cuando estemos mandando un objeto como parametro.
  const { usuario, setUsuario } = useContext(PruebaContext); //Recuerda que este no es un useState, estos son valores que vienen del context

  return (
    <BrowserRouter>
      <header className='header'>
        <nav>
          <div className='logo'>
            <h2>Aprendiendo React Context</h2>
          </div>
          <ul>
            <li>
              <NavLink to='/'>Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/articulos'>Articulos</NavLink>
            </li>
            <li>
              <NavLink to='/acerca-de'>Acerca de</NavLink>
            </li>
            <li>
              <NavLink to='/contacto'>Contacto</NavLink>
            </li>

            {
            'username' in usuario && usuario.username !== null ? (
              <>
              <li>
                  <NavLink to='/'>@{usuario.username}</NavLink>
                </li>
                <li>
                <a href='/#' onClick={e =>{
                  e.preventDefault();
                  setUsuario({});
                }}>Cerrar Sesion</a>
              </li>
              </>
                
            ) : (
              <li>
                <NavLink to='/login'>Identificate</NavLink>
              </li>

            )}



          </ul>
        </nav>
      </header>


      <section className='content'>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/inicio' element={<Inicio></Inicio>}></Route>
          <Route path='/articulos' element={<Articulos></Articulos>}></Route>
          <Route path='/acerca-de' element={<Acerca></Acerca>}></Route>
          <Route path='/contacto' element={<Contacto></Contacto>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/*' element={<Inicio></Inicio>}></Route>
        </Routes>
      </section>

    </BrowserRouter>
  )
}
