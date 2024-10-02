import React from 'react'
import { useSelector,useDispatch } from 'react-redux' 
import { removeTodo } from '../redux/slices/todo/todoSlice';
const Todos = () => {
  const dispatch=useDispatch();
  const todos=useSelector(state=>state.todos)
  
  return (
    <div>
      <h1 className='text-2xl text-blue-600'>Todos</h1>
      {todos.map((todo)=>{
        return <li key={todo.id}>
            {todo.text}
           <button onClick={()=>{dispatch(removeTodo(todo.id))}} className='bg-red-500 px-2 rounded-lg mx-5 my-2 hover:bg-red-400'>X</button>  
        </li>
      })}
    </div>
  )
}

export default Todos
