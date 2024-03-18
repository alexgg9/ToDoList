import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const ToDo = ({task, toggleComplete, deleteToDo, editToDo}) => {
  return (
    <div className='ToDo'>
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon className= 'edit-icon' icon={faPenToSquare} onClick={() => editToDo(task.id)}/>
        <FontAwesomeIcon className= 'delete-icon' icon={faTrash} onClick={() => deleteToDo(task.id)}/>
      </div>
    </div>
  )
}


