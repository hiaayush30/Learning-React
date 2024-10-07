import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query' //for caching
import { todosApi } from './service/todos'

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        //reducers handle the events or action objects being dispatched
        [todosApi.reducerPath]:todosApi.reducer
    },
    middleware:(getDefaultMiddleware)=>           //for caching
        getDefaultMiddleware().concat(todosApi.middleware)
})


setupListeners(store.dispatch)

//TS type safety
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch