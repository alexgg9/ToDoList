import React, { useState } from 'react'


export const EditToDoForm = ({editToDo, task}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = (e) => {

        e.preventDefault();

        editToDo(value, task.id);
    }
  return (
    <form className='toDoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' /> 
        <button type='submit' className='todo-btn'>Editar tarea</button>
    </form>
  )
}

