import React, { useState } from 'react'
import Draggable from 'react-draggable'

const Text = () => {
    const [edit,setEdit]=useState(false);
    const [ value,setValue]=useState('Double Click to edit!');
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
  return (
  <Draggable>
    {edit ? <input type='text' onKeyDown={(e)=>{if(e.key==='Enter')setEdit(false)}} value={value} onChange={handleChange} className='h-8 px-1'></input>:
    <h1 className='text-xl cursor-pointer min-w-44' onDoubleClick={()=>{setEdit(true)}}>{value}</h1>}
  </Draggable>
  )
}

export default Text
