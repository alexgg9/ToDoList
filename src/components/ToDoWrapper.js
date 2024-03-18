import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { ToDo } from './ToDo'
import { v4 as uuidv4 } from 'uuid'
import { EditToDoForm } from './EditToDoForm'
uuidv4()

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(),
            task : todo,
            complete: false,
            isEditing: false}])
    }
    
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, completed: !todo.complete} : todo))
    }

    const deleteToDo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editToDo = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodoWrapper'>
      <h1>To Do List</h1>
      <ToDoForm addTodo={addTodo}/>
      {todos.map((todo) => (
          todo.isEditing ? (
            <EditToDoForm editToDo={editTask} task={todo}/>
          ) : (
            <ToDo 
                        key={todo.id}
                        task={todo}
                        deleteToDo={deleteToDo}
                        editToDo={editToDo}
                        toggleComplete={toggleComplete}
                />
              )    
            )
        )}
    </div>
  );
};

