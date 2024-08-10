import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [form, setForm] = useState({name:'',email:''})
  const handleChange=function(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

  return (
      <div>
        <Navbar/>
        <form style={{padding:'10px',display:'flex',gap:'10px',justifyContent:'center', alignItems:'center'}}>
            <input type='text' name='name' value={form.name} onChange={handleChange}></input>
            <input type='text' name='email' value={form.email} onChange={handleChange}></input>
        </form>
       </div>
  )
}

export default App
