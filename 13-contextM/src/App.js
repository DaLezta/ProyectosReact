import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    let usuario_locale = localStorage.getItem('usuario');
    console.log(usuario_locale);
    setUsuario(JSON.parse(usuario_locale))
  }, []);
  

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario])

  return (
    <div className="App">
      {/* Quiere decir que viene del provider */}
      {/* Envolvemos nuestro router dentro del prueba context que es nuestro usecontext */}
      <PruebaContext.Provider value={{
        usuario,
        setUsuario
      }}>
        <AppRouter></AppRouter>
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
