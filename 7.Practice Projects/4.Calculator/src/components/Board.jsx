import React, { useState, useContext, useEffect } from 'react'
import Square from './Square';
import { playerContext } from '../context/playerContext';

const Board = () => {
    const [winner,setWinner]=useState(null);
    const [state, setState] = useState(Array(9).fill(null));
    const {player,setPlayer}=useContext(playerContext);
    const handleClick =async  (index) => {
       if(state[index]!=null) return; 
       const newState=[...state];
       if(player=='X'){
        newState[index]='X'
        setPlayer('O')
       }
       else{
        newState[index]='O';
        setPlayer('X');
       }
      setState(newState);
    }
    const possibilities=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
const checkWinner=()=>{
    possibilities.forEach(arr => {
        const [a,b,c]=arr;
        if(state[a]===state[b] && state[b]===state[c] && state[a]!=null){
            setWinner(state[a])
        }
    });
}

useEffect(()=>{
    checkWinner();
    if(!state.includes(null)){
        alert('Match Drawn!');
        playAgain();
    }
},[state]);

const playAgain=()=>{
    setState(Array(9).fill(null));
    setWinner(null);
}

    return (
        <div>
           {winner!=null ? <div><div className='text-3xl text-violet-400'>{winner} Won!</div>
           <div><button onClick={playAgain} className='bg-red-500 px-2 py-1 rounded-md text-white my-10'>Play Again!</button></div></div>:<div>
            <div className='flex'>
                <Square btnClick={()=>{handleClick(0)}} value={state[0]} />
                <Square btnClick={()=>{handleClick(1)}} value={state[1]} />
                <Square btnClick={()=>{handleClick(2)}} value={state[2]} />
            </div>
            <div className='flex'>
                <Square btnClick={()=>{handleClick(3)}} value={state[3]} />
                <Square btnClick={()=>{handleClick(4)}} value={state[4]} />
                <Square btnClick={()=>{handleClick(5)}} value={state[5]} />
            </div>
            <div className='flex'>
                <Square btnClick={()=>{handleClick(6)}} value={state[6]} />
                <Square btnClick={()=>{handleClick(7)}} value={state[7]} />
                <Square btnClick={()=>{handleClick(8)}} value={state[8]} />
            </div></div>}
        </div>
    )
}

export default Board
