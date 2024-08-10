import React, { useState, createRef,useRef } from 'react'
import {useSearchParams} from 'react-router-dom'
import Text from '../components/Text';
import Button from '@mui/material/Button';
import { exportComponentAsJPEG } from 'react-component-export-image';

const EditMeme = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const url = params.get('url');
  const addText = () => {
    setCount(count + 1);
  }
  const memeRef = useRef();
  const handleSave=(e)=>{
      exportComponentAsJPEG(memeRef);
  }
  return (
    <div className='px-5 text-black bg-white opacity-95'>
      <div className='my-1'>
        <span className='text-2xl my-3 mx-2'>Edit Meme!</span>
        <Button variant="contained" color="success" onClick={handleSave}>Save</Button>
        <button onClick={addText} className='bg-red-500 rounded-md px-2 py-1 my-2 mx-2'>Add Text</button>
      </div>
      <div ref={memeRef} className='w-96 h-96 flex'>
        <img src={url} className='max-h-96 border-2'></img>
        {Array(count).fill(0).map(e => {
          return <Text />
        })}
      </div>
    </div>
  )
}

export default EditMeme
