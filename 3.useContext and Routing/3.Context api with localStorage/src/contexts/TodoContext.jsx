import { createContext, useContext, useState } from "react";
export const TodoContext=createContext(null);

export const useTodoContext=()=>{
    return useContext(TodoContext);
}

export const TodoContextProvider=({children})=>{
    const [todos,setTodos]=useState([])
    return(
        <TodoContext.Provider value={{todos,setTodos}}>
           {children}
        </TodoContext.Provider>
    )
}