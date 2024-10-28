import React from 'react'
import './Greeting.css'
import { FcLike } from "react-icons/fc";
const Greeting = () => {
    const greetStyle={backgroundColor:"red",borderRadius:'5px',padding:'5px'}
    const greet = "wassup";
    return (
        <div 
        // style={greetStyle}
        className='greetingStyle'
        >
            <h1>{greet}</h1>
            <p>{new Date().getDate()}</p>
            <FcLike size={30} color='gold'/>
        </div>
    )
}

export default Greeting
