import React from 'react'
import { useAppSelector } from './app/hooks'

const Box = () => {
    const val=useAppSelector(state=>state.counter.val);
  return (
    <div>
     Box component: {val}
    </div>
  )
}

export default Box
