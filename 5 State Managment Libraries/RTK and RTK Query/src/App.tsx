import './App.css'
import { decrement,increment } from './app/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './app/hooks';
import Box from './Box';
import AddTodo from './components/AddTodo';
import AllTodos from './components/AllTodos';
function App() {
  //getting the data
  const count=useAppSelector(state=>state.counter.val); 
  //changing the data by sending 'actions' to the store
  const dispatch=useAppDispatch();
  return (
   <div>
     Hello There
     <div>The count is {count}</div>
     <button onClick={()=>dispatch(increment())}>Increment</button>
     {/* increment(): This is an action creator function that returns an action object. 
     For example, it might return something like { type: 'INCREMENT' }. which is dipatched to the 
     store */}
     <button onClick={()=>dispatch(decrement())}>Decrement</button>
     <AddTodo/>
     <Box/>
     <AllTodos/>
   </div>
  )
}

export default App
