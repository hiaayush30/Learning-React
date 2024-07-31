import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='bg-zinc-700 fixed top-0 opacity-90 w-full h-10 text-white flex justify-between items-center'>
      <div className='flex gap-10 px-10'>
      <Link to={'/profile'} className='bg-zinc-700 hover:bg-zinc-900 px-2 py-1 rounded-md text-red-500 hover:text-white'>Home</Link>
      <Link className='bg-zinc-700 hover:bg-zinc-900 px-2 py-1 rounded-md text-red-500 hover:text-white'>My Posts</Link>
      </div>
      <div className='mx-10'>
      <Link onClick={(e)=>{
        fetch('http://localhost:3000/logout',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:'',
          credentials:'include',
        }).then(async response=>{
          const data=await response.json();
          if(data.msg==='success'){
            navigate('/login');
          }else{
            alert('something went wrong! Please try again later...')
          }
        })
      }} className='bg-zinc-700 hover:bg-zinc-900 px-2 py-1 rounded-md text-red-500 hover:text-white'>Logout</Link>
      </div>
    </div>
  )
}

export default Navbar
