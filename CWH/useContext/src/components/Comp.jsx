import React, { useContext } from 'react'
import { myContext } from '../context/context'

const Comp = () => {
    const {count}=useContext(myContext);
  return (
    <div>
      This is comp component inside Button! and the value of count is {count}
    </div>
  )
}

export default Comp
