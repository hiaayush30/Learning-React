import { createContext, useState } from "react";

export const myContext=createContext(0);

export const MyContextProvider=({children})=>{
    const [count,setCount]=useState(10);
    return(
        <myContext.Provider value={{count,setCount}}>
            {children}
        </myContext.Provider>
    )
}