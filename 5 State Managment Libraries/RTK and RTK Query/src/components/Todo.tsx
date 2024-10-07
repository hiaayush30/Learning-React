
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
  return (
    <div>
      <h3>{todo.id}</h3>
      <h4>{todo.todo}</h4>
    </div>
  )
}
export default Todo
