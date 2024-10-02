import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error.jsx';

// import Login from './pages/Login.jsx';
//Lazy Loading
const Login = React.lazy(()=>import('./Login.jsx'));

import Layout from './Layout.jsx';
import Landing from './pages/Landing.jsx';

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    // loader:
    errorElement: <Error />, // Optional: handle errors for this route
    children: [
      {
         index:true,
         element:<Landing/>
      },
      {
        path: 'home',
        element: <App />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/user/',
    element: <Layout/>,
    // This specifies the main layout or wrapper component for the route and all of its child routes.
    errorElement: <Error />,
    children: [
      {
         index:true,
         element:<User/>,
         loader: async () => {
          const userData = await fetchUserData();
          return userData;
          //now see User component on how to use this data
        },
      },
      {
        path: 'info',
        element: <App />,
      },
      {
        path: 'login',
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Login/>
          </React.Suspense>
        )
      },
    ],
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
