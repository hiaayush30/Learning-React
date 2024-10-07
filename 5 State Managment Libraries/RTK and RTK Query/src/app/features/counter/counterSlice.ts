import {createSlice} from '@reduxjs/toolkit'

export const counterSlice=createSlice({
    name:'counter',
    initialState:{val:0},
    reducers:{                  //to handle the state based on action objects
        increment:(state)=>{   
            state.val+=1;
        },
        decrement:(state)=>{
            state.val-=1;
        }
    } 
})

//createSlice function returns an object with 'actions' and 'reducer' property
export const {increment,decrement}=counterSlice.actions;  //will be used by us to dispatch events
// counterSlice.actions contains the actions defined in the
// reducers object (increment and decrement).
export default counterSlice.reducer   //will be used to provide the reducers to the store
// The reducer is a function that handles the logic for updating
// the state based on the dispatched actions.