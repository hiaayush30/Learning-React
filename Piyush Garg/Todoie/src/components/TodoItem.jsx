import React from 'react'

const TodoItem = (props) => {
  return (
    <li className='flex gap-5 justify-between'>
      {!props.completed && <input type='checkbox'></input>}
      <p>{props.item}</p>
      <p>...</p>
    </li>
  )
}

export default TodoItem 
