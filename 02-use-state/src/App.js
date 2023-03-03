import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './Components/MiPrimerEstado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado de REACT - Hook useState</h1>
        <MiPrimerEstado/>
      </header>
    </div>
  );
}

export default App;
