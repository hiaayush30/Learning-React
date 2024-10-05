import { useGetTodoByIdQuery } from "../app/service/todos";

interface TodoProps{
    todo:{
        id:number;
        todo:string;
        completed:boolean;
        userid:number
    }
}
const Todo = (props:TodoProps) => {
  const todo=props.todo
//   const yo=useGetTodoByIdQuery(1);
//   console.log(yo);
  return (
    <div>
      <h3>{todo.id}</h3>
      <h4>{todo.todo}</h4>
    </div>
  )
}
export default Todo
