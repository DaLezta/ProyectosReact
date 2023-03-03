import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Articulos } from '../Componentes/Articulos';
import { Inicio } from '../Componentes/Inicio';
import { Contacto } from '../Componentes/Contacto';
import { Error } from '../Componentes/Error';
import { Persona } from '../Componentes/Persona';
import { PanelControl } from '../Componentes/PanelControl';
import { InicioPanel } from '../Componentes/panel/InicioPanel';
import { Crear } from '../Componentes/panel/Crear';
import { Acerca } from '../Componentes/panel/Acerca';
import { Gestion } from '../Componentes/panel/Gestion';

export const RouterPrincipal = () => {
    let flag = true;
    return (
        <BrowserRouter>
            <h1>Cabecera</h1>
            <hr></hr>

            <nav>
                <li>
                    <NavLink to='/inicio' className={(e) => {
                        return e.isActive ? "activado" : ""
                    }}
                    >Inicio</NavLink>
                </li>
                <li>
                    {/* Como estamos utilizando una funcion anonima necesitamos colocar el parametro isActive por eso va entre {} */}
                    <NavLink to='/articulos' className={
                        ({ isActive }) => {
                            return isActive ? "activado" : ""
                        }
                    }>Articulos</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto' className={({ isActive }) => isActive ? "activado" : ""
                    }>Contacto</NavLink>
                </li>
                <li>
                    <NavLink to='/panel' className={({ isActive }) => isActive ? "activado" : ""
                    }>Panel de control</NavLink>
                </li>
            </nav>
            <hr></hr>

            {/* Cargando componentes */}
            {/* Aqui se carga el componente cuando coincide con el path */}
            <section className='contenido-principal'>
                <Routes>
                    <Route path='/' element={<Inicio></Inicio>}></Route>
                    <Route path='/inicio' element={<Inicio></Inicio>}></Route>
                    <Route path='/articulos' element={<Articulos></Articulos>}></Route>
                    <Route path='/contacto' element={<Contacto></Contacto>}></Route>
                    <Route path='/persona/:nombre/:apellido' element={<Persona></Persona>}></Route>
                    <Route path='/persona' element={<Persona></Persona>}></Route>
                    <Route path='/persona/:nombre' element={<Persona></Persona>}></Route>
                    <Route path='*' element={<Error></Error>}></Route> {/* Esto significa que es cualquier ruta que no exista */}
                    <Route path='/panel/*' element={<PanelControl></PanelControl>}>
                        <Route index element={<InicioPanel></InicioPanel>}></Route>
                        <Route path='inicio-panel' element={<InicioPanel></InicioPanel>}></Route>
                        <Route path='acerca-de' element={<Acerca></Acerca>}></Route>
                        <Route path='gestion-usuarios' element={<Gestion></Gestion>}></Route>
                        <Route path='crear-articulos' element={<Crear></Crear>}></Route>
                    </Route>
                    <Route path='/redirigir' element={<Navigate to="/inicio"></Navigate>}></Route>
                </Routes>
            </section>

            <footer>
                <hr></hr>
                <h1>Footer</h1>
            </footer>


        </BrowserRouter>
    )
}
