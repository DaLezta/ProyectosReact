import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>D</span>
                <h3>Daniel Bustos Landa</h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/Inicio" className={({ isActive }) => isActive ? "activado" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Servicios" className={({ isActive }) => isActive ? "activado" : ""}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portafolio" className={({ isActive }) => isActive ? "activado" : ""}>Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Curriculum" className={({ isActive }) => isActive ? "activado" : ""}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contacto" className={({ isActive }) => isActive ? "activado" : ""}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
