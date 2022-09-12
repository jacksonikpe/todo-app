import React from 'react'
import Todo from './Todo'

const Todos = () => {
  return (
    <div className='todo-container'>
        <ul className='todo-list'><Todo /> </ul>
    </div>
  )
}

export default Todos