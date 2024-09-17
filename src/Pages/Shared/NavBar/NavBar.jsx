import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import auth from "../../../firebase/firebase.config";


const NavBar = () => {

  // import context
  const {user,logOut} = useContext(AuthContext);

   // handle logOut
   const handleLogOut = ()=> {

    logOut(auth)
    .then(() => {

        console.log("log out successfully")
    })

    .catch(error=>{
        console.log(error.message)
    })
}

 
    const navOptions = <>
    
    <li className="font-bold">  <Link to='/'>  Home  </Link>  </li>
    <li className="font-bold">  <Link to='/contact'>  Contact  </Link>  </li>
    <li className="font-bold">  <Link to='/menu'>  Our Menu  </Link>  </li>
    <li className="font-bold">  <Link to='/order'>  Order Food  </Link>  </li>
    <li className="font-bold">  <Link to='/login'>  Login  </Link>  </li>
    <li className="font-bold">  <Link to='/signup'> Signup  </Link>  </li>
   
    
    
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
                <a  onClick={handleLogOut} className="btn btn-error text-white">Log Out </a>
                
                
                </>
                :

                <Link to='/login'>  <button className="btn btn-accent text-white">Log In</button> </Link>


              }
   



  </div>
</div>
    );
};

export default NavBar;