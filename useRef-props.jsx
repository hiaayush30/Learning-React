import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const ref=useRef();
  const a=useRef(0);
  useEffect(()=>{
    a.current=a.current+1;
    ref.current.style.backgroundColor="red";
  },[])
  return (
    <>
      <div>
        <Navbar a={a.current}/>
        <div>Counter:{count}</div>
        <button ref={ref} onClick={()=>{setCount(count+1)}}>Increase</button>
       </div>
    </>
  )
}

export default App
