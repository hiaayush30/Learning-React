import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { myContext } from './context/context'


function App() {
  //App=>Navbar=>Button=>Comp

  return (
        <div>
        <Navbar/>
        Hello There!   
       </div>
  )
}

export default App
