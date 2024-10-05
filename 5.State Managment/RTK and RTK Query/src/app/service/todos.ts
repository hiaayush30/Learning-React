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
        })
    })
})

export const {useGetAllTodosQuery,useGetTodoByIdQuery}=todosApi