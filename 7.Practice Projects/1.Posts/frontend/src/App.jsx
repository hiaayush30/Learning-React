import './App.css'
import { useForm } from 'react-hook-form';
import { Link, redirect,useNavigate } from 'react-router-dom'

function App() {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()


  //handling checks and then sending data to backend which returns a token as a cookie
  const onSubmit = async (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;
    if (!emailRegex.test(data.email)) {
      alert('Enter a valid email!')
    }
    else if (!passwordRegex.test(data.password)) {
      alert('Password should have atleat 1 smallcase,1 uppercase and 1 special character!')
    }
    else {
      console.log(JSON.stringify(data));
      await fetch('http://localhost:3000/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data),
        credentials:'include'
      }).then(async response => {
        const data=await response.json();
        if(data.msg=='success'){
           navigate('/profile')
        }else{
          alert('something went wrong! Please try agin later')
        }
      })
    }
  }

  return (
    <>
      <Link to={'/login'} className='absolute right-5 py-1 my-2 bg-red-800 text-white opacity-90 px-2 rounded-md text-xl'>Login</Link>
      <div style={{ backgroundImage: "url('./images/background-home.jpg')" }} className='font-mono h-screen w-screen text-white bg-zinc-900 flex flex-col justify-center items-center'>
        <span className='inline-block mx-10 text-4xl my-5 transition-all cursor-pointer text-red-600 bg-zinc-900 px-2 rounded-md opacity-90' onClick={() => { window.location.href = '/' }}>Project-A</span>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-zinc-900 opacity-90 rounded-md p-10'>
          <div className='flex flex-col gap-10'>
            <div>
              <label>Email:</label>
              <input type='text' placeholder="john@gmail.com" {...register("email", { required: true },)} className='ml-8 text-white bg-transparent rounded px-2 py-1 outline-none' />
            </div>
            <div>
              <label>Username:</label>
              <input placeholder="John" {...register("username", { required: true }, { minLength: 6 })} className='ml-1 text-white bg-transparent rounded px-2 py-1 outline-none' />
            </div>
            <div>
              <label>Password:</label>
              <input type='password' placeholder='password' {...register("password", { required: true }, { minLength: 6 })} className='ml-1 text-white bg-transparent rounded px-2 py-1 outline-none' />
            </div>
            <div className='text-center'>
              <input disabled={isSubmitting} type="submit" className='bg-zinc-800 px-2 py-1 rounded-md hover:bg-zinc-700 cursor-pointer' />
              {errors.password && <div className='mt-3 text-red-500'>password is required!</div>}
              {errors.username && <div className='mt-3 text-red-500'>Username is required!</div>}
              {errors.email && <div className='mt-3 text-red-500'>Email is required!</div>}
              {isSubmitting && <div>Registering...</div>}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
