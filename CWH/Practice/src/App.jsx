import { useForm } from "react-hook-form"


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm()

  const delay = ()=>{
    return new Promise((res,rej)=>{
      setTimeout(()=>{res()},2000)
    })
  }
  const onSubmit = async (data) => {
    await delay();
    console.log(data)
  }


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="john" {...register("username",{required:true,minLength:{value:5,message:"Username must be atleast of 5 characters"}})} />
      {errors.username && <div>{errors.username.message}</div>}


      <input {...register("password", { required: {value:true,message:"password required!"},minLength:{value:5,message:"password should be longer than 4"} })} />
      {errors.password && <div>{errors.password.message}</div>}


      <input type="submit" disabled={isSubmitting} />
      {isSubmitting && <div>Registering....</div>}
    </form>
  )
}
