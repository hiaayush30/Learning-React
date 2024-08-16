//Performance/timer based
import React, { useEffect, useState } from 'react'
// function useCount(time) {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCount(c => c + 1);
//         }, time * 1000)
//         return () => {
//             clearInterval(interval);
//         }
//     }, [time])
//     return count;
// }
//or
function useCount(callback,delay){
    useEffect(()=>{
        const interval=setInterval(()=>{callback()},delay*1000);

    return ()=>{
        clearInterval(interval)
    }
    },[])
}

const App = () => {
    // const myCount = useCount(1);

    const [count,setCount]=useState(0);
    useCount(()=>{setCount(c=>c+1)},1);
    return (
        <div>
            Timer is at {count}
        </div>
    )
}

export default App
