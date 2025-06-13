import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Pure/greeting';
import GreetingFuncion from './Components/Pure/greetingFuncion';
import TaskListComponent from './Components/container/task_list';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx*/}
        {/*<Greeting name="Michel"></Greeting>*/}
        {/*<GreetingFuncion name="Michel"></GreetingFuncion>*/}
        {/*Componentes de listado de tareas*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*Ejemplos de uno de Hooks*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        <MiComponenteConContexto></MiComponenteConContexto>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 