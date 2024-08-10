import React from 'react'
import { useState,useContext } from 'react';
import { playerContext } from '../context/playerContext';

const Square = ({value,btnClick}) => {
    const {setPlayer}=useContext(playerContext);
    return (
        <button onClick={()=>{btnClick()}} className='h-20 w-20 text-center border text-white  border-violet-400 hover:border-orange-500'>{value}</button>
    )
}

export default Square
