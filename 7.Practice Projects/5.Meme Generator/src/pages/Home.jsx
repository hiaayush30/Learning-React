import React from 'react'
import { useState,useEffect } from 'react';
import { getAllMemes } from '../api/memes';
import BasicCard from '../components/BasicCard';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllMemes().then((memes) => setData(memes.data.memes));
    }, [])
    return (
        <div className='flex gap-10 px-5 py-5 justify-center flex-wrap'>
            {data.map(meme => {
                return <BasicCard key={meme.id} meme={meme} />
            })}
        </div>
    )
}

export default Home
