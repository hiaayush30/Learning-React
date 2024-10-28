import React, { useState } from 'react'
import PopupContent from './PopupContent';
// Here's a quick overview of some commonly accessed properties and methods
// on the window.navigator object:

// navigator.userAgent: Provides information about the browser, operating system, and
// device.
// navigator.language: Indicates the language preference of the user.
// navigator.geolocation: Contains methods for accessing the device’s location.
// navigator.clipboard: Provides access to the clipboard for copy and paste
// operations (as seen in your code).

const CopyInput = () => {
    const [inputVal,setInputVal]=useState('');
    const [copied,setCopied]=useState(false);
    const handleCopy=()=>{
        navigator.clipboard.writeText(inputVal).then(()=>{
            setCopied(true);
            setTimeout(()=>{
                setCopied(false)
            },2000)
        })
    }
  return (
    <div>
      <input type='text' value={inputVal} onChange={e=>setInputVal(e.target.value)}></input>
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied}/>
    </div>
  )
}

export default CopyInput
CopyInput