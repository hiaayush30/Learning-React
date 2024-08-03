import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Button from './Button'
//NavLink gives more access
const Navbar = () => {

  return (
    <div style={{display:'flex' ,color:'white',justifyContent:'space-around',alignItems:'center',padding:'10px',height:"20vh",backgroundColor:'#212121'}}>
      This is Nav 
      <Button/>
    </div>
  )
}

export default Navbar
