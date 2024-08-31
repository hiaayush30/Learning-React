/* eslint-disable no-unused-vars */
import { createSlice,nanoid } from "@reduxjs/toolkit";
//nanoid helps generate unique id

export const todoSlice=createSlice({
    name:'todo',
    //initialState,
    //or
    initialState:{
        todos:[{id:1,text:"Hello World"}]
    },
    reducers:{
        addTodo:(state,action)=>{
           const todo={
            id:nanoid(),
            text:action.payload  
           }
           state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            const id=action.payload;
            state.todos=state.todos.filter(todo=>todo.id!=id);
        },
    }
})
//in reducers we write properties and their functions
//state gives access to all the values

export const {addTodo,removeTodo} =todoSlice.actions

export default todoSlice.reducer;