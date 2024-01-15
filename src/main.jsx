//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Body from './components/Body.jsx';
import About from "./components/About.jsx"
import ErrorPage from './components/ErrorPage.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';



import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const approuter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'',
        element:<Body/>
      },
      {
        path:"about",
        element:<About/>
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
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={approuter} />
  
 // </React.StrictMode>,
)
