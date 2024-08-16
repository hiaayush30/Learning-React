//data fetching custom hook//similar to swr library or react query
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

// function useTodos() {
//     const [todos, setTodos] = useState([])
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         axios.get("https://sum-server.100xdevs.com/todos")
//             .then(res => {
//                 setTodos(res.data.todos);
//             })
//         setLoading(false)
//     }, [])
//     return { todos, loading }
// }

//adding a timer(setInterval) repoll the backend every n seconds
function useTodos(time) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
       const interval= setInterval(() => {
            axios.get("https://sum-server.100xdevs.com/todos")
                .then(res => {
                    setTodos(res.data.todos);
                })
        }, time * 1000)
        //run atleast once before the seconds delay
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(res => {
                setTodos(res.data.todos);
            })
        setLoading(false)
        return ()=>{   ///return fn runs whenever the dependency changes or component unmounts
            clearInterval(interval);  //will be handy when the time passed to the useEffect changes(like when time is a state variable)
            console.log("interval cleared!")
        }
    }, [time])
    return { todos, loading }
}
//swr is a library which provide ready-made custom hhoks for data fetching->
// import useSWR from 'swr'
// const fetcher = async function(url) {
//   const data = await fetch(url);
//   const json = await data.json();
//   return json;
// };

// function Profile() {
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello, you have {data.todos.length} todos!</div>
// }

function App() {

    //   const [todos, setTodos] = useState([])

    //   useEffect(() => {
    //     axios.get("https://sum-server.100xdevs.com/todos")
    //       .then(res => {
    //         setTodos(res.data.todos);
    //       })
    //   }, [])

    const { todos, loading } = useTodos(3);

    return (
        <>
            {loading && <div>loading...</div>}
            {todos.map(todo => <Track todo={todo} />)}
        </>
    )
}

function Track({ todo }) {
    return <div>
        {todo.title}
        <br />
        {todo.description}
    </div>
}

export default App