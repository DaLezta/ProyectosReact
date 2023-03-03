import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente'; //IMPORTAMOS EL COMPONENTE O LOS COMPONENTES A UTILIZAR
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { CuartoComponente } from './CuartoComponente';

function App() {
  const ficha_medica ={
    altura: '127cm',
    grupo: 'A+',
    estado: 'Bueno',
    alergias:'Ninguna'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Daniel Bustos
        </p>

        {/* CARGAR MI PRIMER COMPONENTE, ESTAS LLAVES ME PERMITEN UTILIZAR CODIGO JAVASCRIPT */}
        <div className="MisComponentes">
        <SegundoComponente></SegundoComponente>
          <hr></hr>
          <MiComponente></MiComponente>
          <hr></hr>
          <TercerComponente
           nombre="Daniel" 
           apellidos="Bustos Landa"
           ficha = {ficha_medica}></TercerComponente>
            <hr></hr>
           <CuartoComponente></CuartoComponente>

           
        </div>
       

      </header>
    </div>
  );
}

export default App;
