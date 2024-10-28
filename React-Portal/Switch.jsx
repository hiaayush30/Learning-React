import React, { useState } from 'react'
//advanced keys
const Switch = () => {
  const [sw,setSw]=useState(false);
  document.title=sw? 'Dark Mode':'Light Mode';
  return (
    <div>
      <div>{sw ? 'Dark':'Light'}</div>
      <input key={sw ? 'Dark':'Light'} type='text'></input>
      <button onClick={()=>setSw(!sw)}>Switch</button>
    </div>
  )
}

export default Switch
