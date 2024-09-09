
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    
    // CustomHook theke ana hoise = useMenu
  const [menus] = useMenu();
  const popular = menus.filter(item => item.category === 'popular')






    return (
        <div>
            
    <SectionTitle subheading={'Check It Out'} heading={'From Our Menu'} ></SectionTitle>

    
    {/* mapping to show cards */}

    <div className="grid md:grid-cols-2 gap-10 my-4">
        {
            popular.map(item => <MenuItem
            
                key={item._id}
                item={item}
            
            ></MenuItem>)
        }
    </div>
    
    {/* button */}
   <Link to='/menu'>
   <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
   </Link>

    

        </div>
    );
};

export default PopularMenu;