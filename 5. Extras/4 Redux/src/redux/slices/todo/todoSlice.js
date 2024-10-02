/* eslint-disable no-unused-vars */
import { createSlice,nanoid } from "@reduxjs/toolkit";
//nanoid helps generate unique id

export const todoSlice=createSlice({
    initialState:{
        todos:[{id:1,text:"Hello World"}]
    },
    reducers:{   //fns which handle our dispatched events
        addTodo:(state,action)=>{      //current state recieved by the store
           const todo={
            id:nanoid(),
            text:action.payload  
           }
           state.todos.push(todo); //or state.push(todo) if initialState:[{id:1,text:"yo"}]
        },
        removeTodo:(state,action)=>{
            const id=action.payload;
            state.todos=state.todos.filter(todo=>todo.id!=id);
        },
    },
    name:'todo',  //for dev tools
})

export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer;
//actions and reducer are 2 objects we get after using createSlice()
//rtk creates events from the reducers we give and return them in actions object
//rtk also returns reducer which we give to the store