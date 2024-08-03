import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User.jsx';

const router=createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'/home',element:<Home/>},
  {path:'/about',element:<About/>},
  {path:'/contact',element:<Contact/>},
  {path:'/contact/home',element:<Home/>},
  {path:'/User/:user',element:<User/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
       <React.StrictMode>
    <App />
    </React.StrictMode>,
    </RouterProvider>
)
