import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header>Jackson's Todo App</header>
      <Form />
      <Todos />
    </div>
  );
}

export default App;
