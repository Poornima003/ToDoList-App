import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, deleteTodo, editTodo}) => {
  return (
    
    <>
    {/* <div className='tasks'>Tasks:</div> */}
        <div className='bg-violet-500 text-white flex justify-between text-center border rounded-2xl items-center py-3 mb-4 px-4'>
            
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} /> 
                <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)} />       
       
            </div>
        </div>
    </>
  )
}
