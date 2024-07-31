import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';

const router=createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/login',element:<Login/>},
  {path:'/profile',element:<Profile/>},
  {path:'/profile/*',element:<Profile/>},
  {path:'*',element:<Error/>}  //the catch all route
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
