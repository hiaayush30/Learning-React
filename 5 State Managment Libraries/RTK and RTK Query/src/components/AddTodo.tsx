import React from 'react'
import { useAddNewTodoMutation } from '../app/service/todos'

const AddTodo = () => {
    const [addNewTodo, { data,error,isLoading }] = useAddNewTodoMutation();
    const handleAdd = async () => {
        try {
            const todo = {
                todo: 'Hello there folks! how u doin',
                completed: false,
                userId: 1
            }
            await addNewTodo(todo)
            console.log(data);
        } catch (err) {
            console.log(err)
        }
    }
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Something went wrong!</div>
    if(data) return <div>
        <h2>{data.id}</h2>
        <h3>{data.todo}</h3>
    </div>
    return (
        <div>
            <button onClick={handleAdd}>Add New Todo</button>
        </div>
    )
}

export default AddTodo
