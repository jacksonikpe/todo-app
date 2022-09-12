import { useState } from 'react';

import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';


function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>Jackson's Todo App</header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <Todos />
    </div>
  );
}

export default App;
