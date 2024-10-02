import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

//useRef allows us to access the dom elements(ref.current)
//it also helps persist data across re renders
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
