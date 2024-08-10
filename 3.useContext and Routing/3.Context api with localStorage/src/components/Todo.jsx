import React, { useState,useEffect } from 'react'
import { useTodoContext } from '../contexts/TodoContext';

const Todo = ({ todo }) => {
    const { todos, setTodos } = useTodoContext();
    const [edit, setEdit] = useState(false);
    const [input, setInput] = useState(todo.description)
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSave=()=>{
        const newTodos=todos.map(element=>{
            if(todo.id===element.id){
                element.description=input
            }
            return element;
        })
        setTodos(newTodos);
        setEdit(false);
    }
    const handleCheck = () => {
        const newTodos=todos.map(element=>{
            if(todo.id===element.id){
                element.isCompleted=!element.isCompleted
            }
            return element;
        })
        setTodos(newTodos);
    }
    const handleDelete=()=>{
        const newTodos=todos.filter(element=>{
            return element.id!==todo.id
        })
        if(newTodos.length==0){
            localStorage.setItem('todos',JSON.stringify(newTodos));
        }
        setTodos(newTodos);
    }
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
      },[todos])
    return (
        <div className='bg-red-500 px-2 py-1 rounded-lg'>
            <input type='checkbox' disabled={edit} onChange={handleCheck} checked={todo.isCompleted}></input>
            {todo.isCompleted ? <input type='text' value={input} disabled={!edit} onChange={handleChange} className='line-through mx-1 bg-red-500 text-2xl my-2'></input> :
                <input type='text' value={input} disabled={!edit} onChange={handleChange} className='mx-1 bg-red-500 text-2xl my-2'></input>}
            <div className='flex gap-2'>
                {edit ? <button onClick={handleSave} disabled={input.length<3} className='text-white bg-zinc-900 hover:scale-105 transition-all px-2 py-1 rounded-md'>Save</button> :
                    <button onClick={()=>{if(!todo.isCompleted) setEdit(true)}} className='text-white bg-zinc-900 hover:scale-105 transition-all px-2 py-1 rounded-md'>Edit</button>}
                <button onClick={handleDelete} className='text-white bg-zinc-900 hover:scale-105 transition-all px-2 py-1 rounded-md'>Delete</button>
            </div>
        </div>
    )
}

export default Todo
