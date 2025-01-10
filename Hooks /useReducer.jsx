import React, { act, useReducer } from 'react'

const initialState = { count: 0, notifics: 5 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'reset':
            return { ...state, count: 0 };
    }
    return state
}
function LearnUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
          The count is {state.count} and the there are {state.notifics} notifications
        <div>
            <button onClick={()=>dispatch({type:'increment'})}>Increase</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrease</button>
        </div>
        </div>
    )
}

export default LearnUseReducer
