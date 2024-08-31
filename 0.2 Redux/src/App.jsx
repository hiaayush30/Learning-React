import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <div className='p-5 min-h-screen bg-zinc-800 text-white'>
      <Todos/>
      <AddTodo/>
    </div>
  )
}

export default App
