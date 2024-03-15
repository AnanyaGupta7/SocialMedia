import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from "./Home";
import Posts from './Posts';
import Login from './Login';
import ViewPosts from './ViewPosts';
import Registeration from './Registeration';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
   errorElement : <h1>Page Not Found</h1>
  },

  {
    path:'/about',
    element:<About></About>
   
  },
  {
  path:'/contact',
    element:<Contact></Contact>
   
  },
  {
  path:'/posts/:postId',
  element:<Posts></Posts>

  },
  {
    path:'/login',
    element:<Login></Login>
  
    },
    // {
    //   path:'/posts',
    //   element:<Posts></Posts>
    // },
    // {
    //   path: "/Counter",
    //   element: <Counter></Counter>,
    // },
    {
      path:"/posts",
      element:<ViewPosts></ViewPosts>
    },
    {
      path: "/register",
      element: <Registeration></Registeration>,
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <h1>hey....</h1> */}
  </React.StrictMode>
);


