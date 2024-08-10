import React, { useContext } from 'react'
import { CartContext,useCart} from '../context/CartContext'

const Cart = () => {
//  const {items,setItems}=useContext(CartContext);
 const {items,setItems}=useCart();   //easier to read
  return (
    <div>
    <h2>Cart</h2>
    <div>Total Amount:${items.reduce((a,b)=>{return a+b.price},0)}</div>   
    </div>
  )
}

export default Cart
