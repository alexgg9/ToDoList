import React, { useState } from 'react'


export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {

        e.preventDefault();

        if(value){
          addTodo(value);
          setValue('');
        }

    }
    
  return (
    <form className='toDoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Introduce una nueva tarea' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Añadir tarea</button>
    </form>
  )
}

