
import './App.css'
import { RecoilRoot, useRecoilStateLoadable,useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
    {/* <Suspense fallback="loading..."> */}
    <Todo id={1}/>
    <Todo id={2} />
    {/* </Suspense> */}
  </RecoilRoot>
}

function Todo({id}) {
  //can also be done by Suspense API and errors can be managed by ErrorBoundary
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));


  //  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
   //here todo does not have the todo but is an object which has a state and contents
   //the state can have 3 values-loading/hasError/hasValue
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   
   return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}

export default App
