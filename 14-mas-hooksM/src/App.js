import './App.css';
import { MiFormulario } from './components/MiFormulario';
import { MiUsuario } from './components/MiUsuario';
//import { MiComponente } from './components/MiComponente';
//import { PruebasCustom } from './components/PruebasCustom';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        {/* <MiComponente></MiComponente> */}
        {/* <PruebasCustom></PruebasCustom> */}
        {/* <MiFormulario></MiFormulario> */}
        <MiUsuario></MiUsuario>
      </header>

    </div>
  );
}

export default App;
