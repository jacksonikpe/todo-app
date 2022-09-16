import { useState, useEffect } from 'react';

import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';


function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodo, setFilteredTodo] = useState([])

  //filter todo list
  const filterTodo = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todos.filter((task) => task.completed === true))      
        break;
      case "uncompleted":
        setFilteredTodo(todos.filter((task) => task.completed === false))      
        break;      
      default:
        setFilteredTodo(todos)
        break;
    }
  }

  useEffect(() => {
    filterTodo();
  },[todos, status])
  
  return (
    <div className="App">
      <header>Jackson's Todo App</header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <Todos todos={todos} setTodos={setTodos} filteredTodo={filteredTodo} />
    </div>
  );
}

export default App;
