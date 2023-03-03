import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import { Articulos } from "../pages/Articulos";
import { Inicio } from "../pages/Inicio";
import { Crear } from "../pages/Crear";
import { Header } from "../layout/Header";
import { Nav } from "../layout/Nav";
import { Sidebar } from "../layout/Sidebar";
import { Footer } from "../layout/Footer";
import { Busqueda } from "../pages/Busqueda";
import { Articulo } from "../pages/Articulo";
import { Error404 } from "../pages/Error404";
import { Editar } from "../pages/Editar";
export const Rutas = () => {
    return (
        <BrowserRouter>
            {/* Layout */}
            <Header></Header>
            <Nav></Nav>
            {/* Contenido central y rutas */}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/inicio" element={<Inicio></Inicio>}></Route>
                    <Route path="/articulos" element={<Articulos></Articulos>}></Route>
                    <Route path="/crear-articulos" element={<Crear></Crear>}></Route>
                    <Route path="/buscar/:busqueda" element={<Busqueda></Busqueda>}></Route>
                    <Route path="/articulo/:id" element={<Articulo></Articulo>}></Route>
                    <Route path="/editar/:id" element={<Editar></Editar>}></Route>
                    <Route path="*" element={<Error404></Error404>}></Route>
                </Routes>
            </section>
            <Sidebar></Sidebar>
            <Footer></Footer>
        </BrowserRouter>
    );
}