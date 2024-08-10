import React, { useContext, useState } from 'react'
import { useTodoContext } from '../contexts/TodoContext';

const InputBar = () => {
    const [input, setInput] = useState('');
    const { todos, setTodos } = useTodoContext();
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    
    const handleClick = () => {
        if (input.trim().length < 3) {
            setError('Input should atleast be of 3 characters!');
        } else {
            setError('');
            setInput('');
            setTodos([...todos, { id:Date.now(),description:input.trim(),isCompleted: false }]);
        }
    }
    return (
        <div>
            <div>
                <input type='text' onChange={handleChange} value={input} className='px-1 text-black py-1 rounded-l-md outline-none'></input>
                <button onClick={handleClick} className='bg-red-500 px-2 py-1 rounded-r-md'>Add</button>
            </div>
            {error.length > 0 && <div className='text-red-500'>{error}</div>}
        </div>
    )
}

export default InputBar
