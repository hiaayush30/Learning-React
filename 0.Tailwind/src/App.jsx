import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='dark:text-white dark:bg-zinc-900 px-3 py-2 ml-10 mt-10 rounded-lg shadow-xl ring-1 ring-slate-900/5 text-2xl  w-3/4'>
        Hello There!</h1> 
        {/* /5: This specifies the opacity of the ring color. In this case, it is 5%, meaning the ring will be 5% opaque and 95% transparent. */}

        <button className='focus:ring focus:ring-blue-300 active:bg-blue-800 bg-blue-500 px-2 py-1 rounded-md m-10' onClick={()=>{
          document.body.classList.toggle('dark');
        }}>Toggle Dark Mode</button>

        {/* custom style */}
        {/* <p className='m-10 bg-[#973F29] text-white px-5 text-[32px]'>Chestnut Color</p> */}
        <p className='m-10 bg-chestnut text-white px-5 text-[32px]'>Chestnut Color</p>


         <div className='flex space-x-5'>
         <div className='text-2xl first:bg-orange-500 text-center w-10 h-10 rounded-md ml-2'>1</div>
         <div className='text-2xl odd:bg-green-400 even:bg-yellow-200 text-center w-10 h-10 rounded-md ml-2'>2</div>
         <div className='text-2xl odd:bg-green-400 even:bg-yellow-200 text-center w-10 h-10 rounded-md ml-2'>3</div>
         <div className='text-2xl odd:bg-green-400 even:bg-yellow-200 text-center w-10 h-10 rounded-md ml-2'>4</div>
         <div className='text-2xl odd:bg-green-400 even:bg-yellow-200 text-center w-10 h-10 rounded-md ml-2'>5</div>
         </div>
         <button className='myButton'>Stylish Button</button>
    </> 
  )
}

export default App
