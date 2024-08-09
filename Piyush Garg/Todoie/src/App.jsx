import { useState } from 'react'
import './App.css'
import Header from './components/HEader';
import TodoItem from './components/TodoItem';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='font-mono bg-zinc-900 h-screen text-white flex flex-col justify-center items-center'>
      <div className='bg-white text-black p-5 w-72 h-80 rounded-xl flex flex-col justify-around'>
        <Header title="Todoie App" />
        <TodoItem item="Eat" completed={false}/>
        <TodoItem item="Sleep" completed={false} />
        <TodoItem item="Code" completed={false} />
        <TodoItem item="Repeat" completed={false}/>
        <Button />
      </div>
    </div>
  )
}

export default App
