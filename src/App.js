import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Pure/greeting';
import GreetingFuncion from './Components/Pure/greetingFuncion';
import TaskListComponent from './Components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx*/}
        {/*<Greeting name="Michel"></Greeting>*/}
        {/*<GreetingFuncion name="Michel"></GreetingFuncion>*/}
        {/*Componentes de listado de tareas*/}
        <TaskListComponent></TaskListComponent>
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
 