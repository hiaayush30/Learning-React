
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

const updateTodo = useSetRecoilState(todosAtomFamily(2));

useEffect(() => {
  setTimeout(() => {
    updateTodo({
      id: '2',
      title: 'new title',
      description: 'updated desc'
    })
  }, 5000)
}, [])


function App() {
  return <div>
    <Todo id={1} />
    <Todo id={2} />
    {/* you need different todo atom  depending upon the id */}
  </div>
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      <h3>{todo.title}</h3>
      <h5>{todo.description}</h5>
      <br />
    </>
  )
}

export default App
