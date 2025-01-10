import React, { useEffect, useRef, useState } from 'react'

function Timer() {
const [count,setCount]=useState(0); 
const intervalRef=useRef(null)
useEffect(()=>{
    intervalRef.current=setInterval(()=>{
        setCount(count=>count+1)
    },1000)
    return ()=>{
        clearInterval(intervalRef.current)
    }
},[])
  const handleStop=()=>{
    clearInterval(intervalRef.current)
  }
  return (
    <div>
      <h1>Timer:{count}</h1>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Timer
