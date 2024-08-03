import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const User = () => {
    const params=useParams()
  return (
    <div>
        <Navbar/>
      Hello {params.user}
    </div>
  )
}

export default User
