import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);

        setValue("")
    }
  return (
    <>
        <div className='heading text-red-500 border rounded-2xl text-center bg-white w-36 items-center'>
            TODO LIST
        </div>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder='Add tasks...' onChange={(e)=>setValue(e.target.value)} />
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Add</button>
        </form>
    </>
  )
}
