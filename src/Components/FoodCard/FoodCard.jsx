
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({item}) => {
        
    const {name,recipe,image,price,_id} = item;

    const {user} = useAuth();

    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate();
  
    // refetch => jate add korar sathe sathe COUNT hoye jai 
    const [, refetch] = useCart();

    // add to cart
    const handleAddToCart = (food)=>{
       
      if(user && user.email){

        console.log(user.email , food)

        const cartItem = {

          menuIemId: _id,
          email: user.email,
          name,
          image,
          price


        }

        // use axios instead of useEffect to send data to server securely
        axiosSecure.post('/carts', cartItem)
        .then(res=> {

          console.log(res.data);

        if(res.data.insertedId){

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch => jate add korar sathe sathe COUNT hoye jai 
          refetch();
        }


        })



      }
      else{
     
        // sweet alert
        Swal.fire({
          title: "You Are Not Logged In",
          text: "Please Logged In First!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Want Log In Now!"
        }).then((result) => {
          if (result.isConfirmed) {
             
        //  login page e niye jawa
        navigate('/login')


          }
        });

      }
     
    }


    return (
        <div className="card bg-base-100 w-96 shadow-xl my-10">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name} </h2>
          <p className="font-semibold"> ${price} </p>
          <p className="font-semibold"> {recipe} </p>
          <div className="card-actions ">
    <button 
    
    // add to cart
    onClick={()=> handleAddToCart(item) }
    
    
    className="btn btn-outline bg-state-500 border-0 border-b-4 border-orange-400 mt-4">Add To Cart</button>
            
          </div>
        </div>
      </div>
    );
};

export default FoodCard;