//all of the api logic like how to update,delete,get data here
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const todosApi=createApi({
    reducerPath:"todosApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    endpoints:(builder)=>({
        getAllTodos:builder.query({
            query:()=>'/todos'
        }),
        getTodoById:builder.query({
            query:(id)=>'/todos/'+id
        }),
        addNewTodo:builder.mutation({
            query:(newTodo)=>({
                url:'/todos/add',
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:newTodo
            })
        })
    })
})
export const {useGetAllTodosQuery,useGetTodoByIdQuery,useAddNewTodoMutation}=todosApi