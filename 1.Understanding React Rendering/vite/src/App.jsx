import { useState } from 'react'
import './App.css'
import Chai from './Chai.jsx'
function App() {
  const [count, setCount] = useState(0)
  const user="Chai aur Code";
  return (

    <>
      <h1>Hello World! {user}</h1>
      //the above "user" is evaluated expression as we do not write the 
      //full JS only the final evaluated outcome
      <Chai/>
    </>
  )
}

export default App
