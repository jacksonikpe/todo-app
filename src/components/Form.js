import React from 'react'
import { v4 as uuid } from 'uuid'

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputHandler = (e) => {
        setInputText(e.target.value)        
    }

    const submitFormHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, {text: inputText, completed: false, id: uuid()}]);
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    
  return (
    <form>
        <input type="text" className='todo-input' value={inputText} onChange={inputHandler} />
        <button className='todo-button' onClick={submitFormHandler} type='submit'><i className='fas fa-plus-square'></i></button>
        <div className='select'>
            <select onChange={statusHandler} name="todos" className='filter-todo'>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form