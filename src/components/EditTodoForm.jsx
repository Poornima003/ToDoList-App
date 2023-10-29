import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value, task.id);

        setValue("")
    }
  return (
    <>
        
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder='Update tasks...' onChange={(e)=>setValue(e.target.value)} />
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Save</button>
        </form>
    </>
  )
}
