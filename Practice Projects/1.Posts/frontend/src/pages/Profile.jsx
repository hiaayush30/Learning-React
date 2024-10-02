import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState({});

  //to validate user
  useEffect(() => {
    try {
      fetch('http://localhost:3000/validateUser', {
        credentials: 'include'
      }).then(async response => {
        const data = await response.json();
        if (data.msg==='success') {
          setUser({
            username:data.username,
            email:data.email
          })
        }else{
          console.log('you must login to access this url!')
          navigate('/login');
        }
      })
    } catch (e) {
      console.log(e);
    }
  }, [])

  return (
    <div className='w-screen h-screen bg-zinc-900'>
      <div>
        <Navbar />
      </div>
      <main className='pt-20 text-white text-4xl px-10'>
        Hello there {user.username} 👋🏻
      </main>
    </div>
  )
}

export default Profile
