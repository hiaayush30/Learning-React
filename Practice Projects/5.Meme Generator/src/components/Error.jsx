import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-white'>
      <h1>How did we get here?</h1>
      <Link to='/'>Go Back!</Link>
    </div>
  )
}

export default Error
