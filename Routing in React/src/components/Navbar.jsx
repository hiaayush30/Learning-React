import React from 'react'
import { Link,NavLink } from 'react-router-dom'
//NavLink gives more access
const Navbar = () => {

  return (
    <div style={{display:'flex' ,justifyContent:'space-around',alignItems:'center',padding:'10px',height:"20vh",backgroundColor:'#212121'}}>
    <NavLink className={(e)=>{return e.isActive && console.log('active')}} to='/home' style={{color:'white',textDecoration:'none',fontSize:'24px'}}>Home</NavLink>
    <Link to='/about'style={{color:'white',textDecoration:'none',fontSize:'24px'}} >About</Link>
    <Link to='/contact' style={{color:'white',textDecoration:'none',fontSize:'24px'}}>Contact</Link>
    </div>
  )
}

export default Navbar
