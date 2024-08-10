import { useEffect, useState } from 'react'
import './App.css'
import InputBar from './components/InputBar';
import { useTodoContext } from './contexts/TodoContext'
import Todo from './components/Todo';

function App() {
  const { todos, setTodos } = useTodoContext();
  useEffect(()=>{
    let storedTodos=localStorage.getItem('todos') || [];
    storedTodos=JSON.parse(storedTodos);
    setTodos(storedTodos);
  },[])
  return (
    <div className='min-h-screen bg-zinc-900 text-white flex flex-col justify-start items-center py-10'>
      <div className='border px-5 py-5 rounded-lg bg-zinc-800'>
        <div className='flex flex-col justify-center items-center gap-10 my-10'>
          <h1 className='text-3xl'>Manage yout Todos!</h1>
          <InputBar />
        </div>
        <div className='flex flex-col gap-10'>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo}></Todo>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
