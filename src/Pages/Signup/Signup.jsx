import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import pic1 from "../../assets/others/authentication2.png"

const Signup = () => {

   
        // handle-Form-Submit
        const handleSignup = e => {
            e.preventDefault()
            const name = e.target.name.value
            const email = e.target.email.value
            const password= e.target.password.value
    
            console.log(name,email,password)
        }



    return (
        <>
        <Helmet>
            <title>Bistro Boss | Sign Up</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold text-green-500 my-10 ml-10">Sign Up Now!</h1>
                    
                    <img src={pic1} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">

                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  name="name" placeholder="name" className="input input-bordered" />
                        </div>



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
                           
                        </div>
                       
                        <div className="form-control mt-6">
                            <input  className="btn btn-accent" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='mx-8 font-bold mb-10'><small>Already Registered? <Link to="/login">Log In First!</Link> </small></p>
                
               
                
                </div>
            </div>
        </div>
    </>
    );
};

export default Signup;