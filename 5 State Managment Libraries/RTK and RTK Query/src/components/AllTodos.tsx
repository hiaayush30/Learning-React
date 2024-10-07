import { useGetAllTodosQuery,useGetTodoByIdQuery } from '../app/service/todos'
import Todo from './Todo';
interface TodoInterface {
    id: number;
    todo: string;
    completed: boolean;
    userid: number
}
const AllTodos = () => {
    const { data, isLoading, isError } = useGetAllTodosQuery(undefined);
    if (isError) return <div>Something went wrong!</div>
    if (isLoading) return <div>Loading...</div>
    //   const speceficTodeo=useGetTodoByIdQuery(1);
    //   console.log(speceficTodo);
    const todos: [TodoInterface] = data.todos;
    return <div>
        {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />
        })}
    </div>
}

export default AllTodos
