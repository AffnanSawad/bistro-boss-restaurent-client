import {
   
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Shared/Contact/Contact";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";


 

  
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
        },
        {
          path: 'order',
          element:  <Order></Order> 
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        },
        {
          path: 'secret',
          element:   <PrivateRoute> <Secret></Secret>  </PrivateRoute> 
        },
       


      ]
    },
  



    // another section ******
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,


      children: [

    {
      path: 'cart',
      element: <Cart></Cart>
    },


    // admit routes
    {
      path: 'users',
      element: <AllUsers></AllUsers>
    }


      ]
    }
  ]);