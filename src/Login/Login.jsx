import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


const Login = () => {

    // import context
    const {signIn,googleLogIn} = useContext(AuthContext);

    // navigate = jate login korle home page e niye jai
    const navigate = useNavigate();

   

// handle Form

const handleLogin = e => {
    e.preventDefault()
    const email=e.target.email.value;
    const password =e.target.password.value; 

    console.log(email,password)


    // login
    // new user
    signIn(email,password)

    .then(result => {

        console.log(result.user)

        // form reset
        e.target.reset();


        Swal.fire({
          title: "  Logged In!",
          text: "You Are Successfully Logged In!",
          icon: "success"
        });

        // navigate
        navigate('/');
    })

    .catch(error=>{
        console.log(error)
    })

}

// google handle

const handleGoogleLogin = ()=>{

    googleLogIn()
    .then(result => {

        console.log(result.user);

        Swal.fire({
          title: "  Logged In!",
          text: "You Are Successfully Logged In!",
          icon: "success"
        });

        //    navigate
        navigate('/');

    
    })

    .catch(error=>{
        console.log(error.message)
    })

}


    return (
        <div className="hero  min-h-screen bg-blue-300">
        <div className="hero-content flex-col mt-5">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl  mb-2 font-bold text-black">Log In Now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              
             

                <button  className="btn btn-outline btn-primary">Log In</button>
            
               <h3 className="text-center my-4 font-bold text-xl"> <hr /> </h3>

                <p>  <button className="btn btn-ghost mt-2 bg-opacity-30 bg-slate-700 w-full font-bold" onClick={handleGoogleLogin}>  <FcGoogle />  Google  </button> </p>


              </div>
            </form>

            <hr />
            <p className="font-bold mx-10 mb-10 underline">New Here? <Link to="/signup">Please Register First</Link> </p>
         
           



          </div>
        </div>
      </div>
    );
};

export default Login;