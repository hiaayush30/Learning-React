import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Item = ({name,price}) => {
    const {items,setItems}=useContext(CartContext);
    const handleClick=()=>{
        setItems([...items,{name,price}])
    }
  return (
    <li>
      Name:{name}
      Price:{price}
      <button onClick={handleClick}>Add</button>
    </li>
  )
}

export default Item
