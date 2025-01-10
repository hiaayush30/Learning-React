import {Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
const [render,setRender]=useState(true);
useEffect(()=>{setTimeout(()=>{setRender(false)},3000)},[])
  return (
    <>
      {render && <MyComponent/>}
    </>
  )
}

import React, { useState, useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
  console.log("Component mounted!")
 
  //cleanup function will run any time the dependencies change or when the component unmounts
    return () => {
      console.log("component unmounted!");
    };
  }, []);
  return(
    <div>Hey from MyComponent</div>
  )
}
export default App
