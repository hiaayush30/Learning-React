import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { myContext } from './context/context'


function App() {
  //App=>Navbar=>Button=>Comp
  const [count,setCount]=useState(10);

  return (
      <myContext.Provider value={{count,setCount}}>
        <div>
        <Navbar/>
        Hello There!   
       </div>
      </myContext.Provider>
  )
}

export default App
