//import React from 'react'
import { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Body from './components/Body.jsx';

import ErrorPage from './components/ErrorPage.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';
import Shimmer from './components/Shimmer.jsx';

import RestaurantPage from './components/RestaurantPage.jsx';


import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const About  = lazy(() => import("./components/About.jsx"))


const approuter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:"about",
        element:<Suspense fallback={<Shimmer/>}>
        <About/>
        </Suspense>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"restaurant/:id",
        element:<RestaurantPage/>
      }

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={approuter} />
  
 // </React.StrictMode>,
)
