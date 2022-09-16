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

  //save to local
  const saveLocalTodo = () => {    
      localStorage.setItem('todos', JSON.stringify(todos))    
  }

  //get todo from local storage
  const getLocalTodo = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }

  //run once when app starts
  useEffect(() => {
    getLocalTodo() 
  }, [])

  useEffect(() => {    
    filterTodo();
    saveLocalTodo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
