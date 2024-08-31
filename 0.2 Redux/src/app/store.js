import { configureStore } from "@reduxjs/toolkit"; 
import todoReducer  from '../features or slices/todo/todoSlice'

export const store=configureStore({
    reducer:todoReducer
})

//reducers are pure fns that take current state and action as inputs
//(provided by the store) and return a new updated state based on the
//action and the payload