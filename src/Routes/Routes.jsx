import {
   
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Shared/Contact/Contact";
import Menu from "../Pages/Menu/Menu/Menu";
 

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
     
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: 'menu',
            element: <Menu></Menu>
        }


      ]
    },
  ]);