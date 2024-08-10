import { useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'
import { CartContext } from './context/CartContext'


function App() {
  const {setItems}=useContext(CartContext);

  return (
        <div>
          <h1>Shop</h1>
          <Item name="Galaxy S21" price={1000}></Item>
          <Item name="HP Pavilion" price={198000}></Item>
          <Item name="Acer Aspire" price={123000}></Item>
          <Cart/>
        </div>
  )
}

export default App
