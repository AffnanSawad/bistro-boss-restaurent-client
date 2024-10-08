import { Link } from "react-router-dom";

import featured from "../../../assets/home/featured.jpg"
import './Featured.css'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Featured = () => {
    return (
        <div className="featured-item bg-fixed font-bold text-white pt-8 my-20">
            
    <SectionTitle
    
    
    subheading={"Check It Out"}
    heading={"Featured Item"}

    >        
    </SectionTitle>


    <div className="md:flex justify-center items-center pt-12 pb-20 px-36 bg-slate-600 bg-opacity-30">

    
    <div>
        <img src={featured} alt="" />
    </div>

    <div className="md:ml-10">
        
        <p className=" uppercase">Where Can I Get Some?</p>
        <p>You can get foods here.There are many kinds of foods such as soups,pizza,desserts,salad.</p>
       <Link to='/order'>  <button className="btn  my-5 btn-error text-white">Order Now</button>   </Link>

    </div>


    </div>


        </div>
    );
};

export default Featured;