import { Helmet } from "react-helmet-async";
import pic1 from "../../assets/others/authentication2.png"
import { Link } from "react-router-dom";

const Login = () => {

      
    // handle-Form-Submit
    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password= e.target.password.value

        console.log(email,password)
    }
 


    return (
        <>
        <Helmet>
            <title>Bistro Boss | Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold text-blue-500 my-10 ml-10">Login Now!</h1>
                    
                    <img src={pic1} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                       
                        <div className="form-control mt-6">
                            <input  className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='mx-8 font-bold mb-10'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                
               
                
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;