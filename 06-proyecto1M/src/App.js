import { useState } from 'react';
import './App.css';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';
import { Listado } from './components/Listado';

function App() {

    // Esta variable de usestate esta compartida con el componente hijo Listado y se envia la informacion como props
    const [listadoState, setListadoState] = useState([]);
    

  return (
    <div className="layout">
        {/* <!-- cabecera del sitio --> */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>

            <h1>Mis Peliculas</h1>
        </header>

        {/* <!-- Barra de navegacion --> */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/* //<!-- Contenido principal --> */}

        <section className="content">
            {/* Aqui va el listado de peliculas */}
            <Listado listadoState={listadoState} setListadoState={setListadoState}></Listado>
        </section>


        <aside className="lateral">
            {/* Aqui va el buscador */}
            <Buscador listadoState={listadoState} setListadoState={setListadoState} ></Buscador>

            {/* Aqui va el componente de crear */}
            <Crear setListadoState={setListadoState}></Crear>
            
        </aside>

        <footer className="footer">
            &copy; Master en javascript 
        </footer>


    </div>
  );
}

export default App;
