import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Error } from "../components/Error";
import { Contacto } from "../components/Contacto";
import { Portafolio } from "../components/Portafolio";
import { Servicios } from "../components/Servicios";
import { Curriculum } from "../components/Curriculum";
import { Proyecto } from "../components/Proyecto";
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* Header y navegacion */}
            <HeaderNav></HeaderNav>

            {/* Contenido central */}
            <Routes>
                <Route path="/" element={<Inicio></Inicio>}></Route>
                <Route path="/Inicio" element={<Inicio></Inicio>}></Route>
                <Route path="/Contacto" element={<Contacto></Contacto>}></Route>
                <Route path="/Servicios" element={<Servicios></Servicios>}></Route>
                <Route path="/Portafolio" element={<Portafolio></Portafolio>}></Route>
                <Route path="/Curriculum" element={<Curriculum></Curriculum>}></Route>
                <Route path="/Proyecto/:id" element={<Proyecto ></Proyecto>}></Route>
                <Route path="/*" element={<Error></Error>}></Route>
            </Routes>

            {/* Footer */}
            <Footer></Footer>
        </BrowserRouter>
    )
}
