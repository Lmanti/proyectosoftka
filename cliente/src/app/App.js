import './App.css';
import { Route } from 'react-router-dom';
import { Configurar } from '../components/configurar';

function App() {
  return (
    <div className="App">
      <Route exact path="/configuracion" component={Configurar} />
    </div>
  );
}

export default App;
