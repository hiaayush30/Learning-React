import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useForm } from "react-hook-form"
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  //sending data to backend which returns token and redirects to /profile
  const onSubmit =(data) => {
     try{
      fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data),
        credentials:'include'
       }).then(async (res)=>{
        const data=await res.json();
        if(data.msg=='success'){
          navigate('/profile');
        }else{
          alert('username or password incorrect!');
        }
       })
     }catch(e){
      console.log(e);
     }
  }

//to check if the user has a token,if yes then take him/her to the profile page
  useEffect(() => {
    if (Cookies.get('token')) {
      fetch('http://localhost:3000/validateUser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      }).then(async (response) => {
        const data = await response.json();
        if (data.msg == 'success') {
          navigate('/profile');
        }
      })
    }
  }, [])

  return (
    <div>
      <Link to={'/'} className='absolute right-3 text-white px-2 py-1 rounded-md bg-red-800 mt-5'>Sign-Up</Link>
      <div className='font-mono bg-zinc-800 h-screen w-screen' style={{backgroundImage:"url('./images/background-home.jpg')"}}>
        <div className='h-screen flex flex-col justify-center items-center'>
          <h1 className='text-4xl text-red-500 my-5'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='text-white bg-zinc-900 p-5 rounded-md opacity-90'>
            <div className='my-5 text-2xl'>
              <label htmlFor='user' className='mr-3 cursor-pointer'>Username:</label>
              <input id='user' {...register("username", { required: true })} placeholder='username' className='bg-transparent rounded py-1 px-2'/>
            </div>
            <div className='my-5 text-2xl'>
              <label htmlFor='pass' className='mr-5 cursor-pointer'>Password:</label>
              <input id='pass' {...register("password", { required: true })} placeholder='password' className='bg-transparent rounded p-1'/>
            </div>
           <div className='text-center my-5'>
           <input disabled={isSubmitting} type="submit" className='px-2 py-1 rounded-md cursor-pointer bg-zinc-800 hover:bg-zinc-700'/>
           </div>
            {isSubmitting && <div className='text-center'>Registering...</div>}
            {errors.username && <div className='text-red-500'>Username is required!</div>}
            {errors.password && <div className='text-red-500'>Password is required!</div>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
