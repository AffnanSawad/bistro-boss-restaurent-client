import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import auth from "../../../firebase/firebase.config";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";


const NavBar = () => {

  // import context
  const {user,logOut} = useContext(AuthContext);

  const navigate = useNavigate();

  // use cart => cart er number
  const [cart] = useCart();

   // handle logOut
   const handleLogOut = ()=> {

    logOut(auth)
    .then(() => {

        console.log("log out successfully");
        
        // swal
        Swal.fire({
          title: "  Logged Out!",
          text: "You Are Successfully Logged Out!",
          icon: "success"
        });
    })

    .catch(error=>{
        console.log(error.message)
    })

    navigate('/')
    
}

 
    const navOptions = <>
    
    <li className="font-bold">  <Link to='/'>  Home  </Link>  </li>
    <li className="font-bold">  <Link to='/contact'>  Contact  </Link>  </li>
    <li className="font-bold">  <Link to='/menu'>  Our Menu  </Link>  </li>
    <li className="font-bold">  <Link to='/order'>  Order Food  </Link>  </li>
    {/* <li className="font-bold">  <Link to='/login'>  Login  </Link>  </li>
    <li className="font-bold">  <Link to='/signup'> Signup  </Link>  </li> */}
    <li className="font-bold">  <Link to='/secret'> Secret  </Link>  </li>
      
    
    
      {/* dashboard => cart */}
      
      <li>   <Link to='/dashboard/cart'>
      
      
      <button className="btn">
     
     {/* shopping card icon  */}
      <FaCartShopping className="mr-4" />

  <div className="badge badge-secondary">+{cart.length} </div>
</button>


</Link> </li>


    
    
    </>




    return (
        <div className="navbar fixed z-10 bg-opacity-60 bg-black text-orange-600 lg:text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
    {navOptions}


      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   

    {navOptions}


    </ul>
  </div>
  <div className="navbar-end">

              {
                user ? <>
                
                <span className="mx-5"> {user.email} </span>
                
                

                <a  onClick={handleLogOut} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5  text-center py-4">Log Out </a>
                
                
                </>
                :

              <>
              
              <Link to='/login'>  <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5">Log In</button> </Link>

              <Link to='/signup'>  <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4">Sign Up</button> </Link>
              
              </>


              }
   



  </div>
</div>
    );
};

export default NavBar;