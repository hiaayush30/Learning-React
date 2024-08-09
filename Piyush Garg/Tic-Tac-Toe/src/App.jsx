import { useState } from 'react'
import './App.css'
import Board from './components/Board';
import { playerContext } from './context/playerContext';

function App() {
  const [player, setPlayer] = useState('X');
  

  return (
   <playerContext.Provider value={{player,setPlayer}}>
     <div className='bg-zinc-900 h-screen flex flex-col justify-around items-center text-white'>
      <h1 className='text-3xl text-red-500'>Tic Tac Toe!</h1>
      <h3 className='text-2xl'>{player}'s Turn:</h3>
      <Board/>
    </div>
   </playerContext.Provider>
  )
}

export default App
