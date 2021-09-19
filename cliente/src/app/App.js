import './App.css';
import { Route } from 'react-router-dom';
import Configurar from '../components/configurar';
import Home from '../components/home';
import Preguntas from '../components/preguntas';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/configuracion" component={Configurar} />
      <Route exact path="/configuracion/preguntas" component={Preguntas} />
    </div>
  );
}

export default App;
