import { useContext, useEffect, useState } from 'react'
import './App.css'
import BasicCard from './components/BasicCard';
import {Link, Outlet} from 'react-router-dom'
import { getAllMemes } from './api/memes';

function App() {
  return (
     <div className='min-h-screen bg-zinc-900'>
      <h1 className='text-red-500 text-center text-3xl'><Link to='/'>Meme Generator</Link></h1>
      <Outlet/>
     </div>
  )
}

export default App
