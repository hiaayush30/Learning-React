import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
            <div className='h-screen bg-zinc-900 text-white p-10 text-2xl mb-10 flex flex-col justify-center text-center gap-10'>
                <div>
                Kaha pahuch gaye aap!🤔
                </div>
                <div>
                    <Link to={'/'} className='rounded bg-zinc-700 px-2 py-1'>Go Home😊</Link>
                </div>
            </div>
    )
}

export default Error
