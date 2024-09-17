import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


const Signup = () => {

    // import context
    const {createUser} = useContext(AuthContext);

     // navigate = jate login korle home page e niye jai
     const navigate = useNavigate();

// handle Form

const handleSignup = e => {
    e.preventDefault()

    const name=e.target.name.value;
    const email=e.target.email.value;
    const password =e.target.password.value; 

    console.log(name,email,password)


    // new user
    createUser(email,password)

    .then(result => {

        console.log(result.user);

        // form reset
        e.target.reset();
       
    //    navigate
        navigate('/');
    })

    .catch(error=>{
        console.log(error.message)
    })


}


    return (
        <div className="hero  min-h-screen bg-green-300">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left mt-10">
      <h1 className="text-3xl mb-2 font-bold text-black">Sign Up Now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      
      
      <form onSubmit={handleSignup} className="card-body">
    
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>



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
          <button className="btn btn-outline btn-accent text-white">Sign Up</button>
        </div>
      </form>

      <hr />
      <p className="font-bold mx-10 mb-10">Already Registered? <Link to="/login">Please Login First</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Signup;