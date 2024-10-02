import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todo/todoSlice'
const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text)) //have to call the event inside dispatch
        setText('');
    }

    return (
        <div className='bg-blue-200 py-2 p-5'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='text' value={text} onChange={(e) => { setText(e.target.value) }} placeholder='text' className='text-black p-1 rounded-lg outline-none'></input>
                <button type='submit' className='bg-blue-500 mx-2 rounded-lg px-1 hover:bg-blue-400'>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
