import React, { useEffect, useState } from 'react'
const useDebounce=(delay ,input)=>{
    const [val,setVal]=useState('') 
    useEffect(()=>{
       const timeout=setTimeout(()=>{
         setVal(`${input} recieved!`);
       },delay *1000) 
       return (
       ()=>{ clearTimeout(timeout);}
       )
    },[input,delay])
    return val;
}
const App = () => {
    const [input,setInput]=useState('');
    const debouncedVal=useDebounce(2,input)
    //when input changes app component will re render with new input which will go to useDebounce
  return (
    <div>
      <input type='text' onChange={(e)=>{setInput(e.target.value)}} value={input}></input>
      <div>{debouncedVal}</div>
    </div>
  )
}

export default App
