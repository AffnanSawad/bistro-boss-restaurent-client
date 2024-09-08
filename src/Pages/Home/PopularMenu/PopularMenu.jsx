import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { json } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";


const PopularMenu = () => {

    const [menus,setmenus] = useState([]);

    // fetching from menu.json to show menus

    useEffect( 
        ()=>{

            fetch('menu.json')
            .then( res=> res.json())

            .then( data=>{

                const popularItems = data.filter(item => item.category === 'popular')

                setmenus(popularItems)
            })
        }
        
        ,[])





    return (
        <div>
            
    <SectionTitle subheading={'Check It Out'} heading={'From Our Menu'} ></SectionTitle>

    
    {/* mapping to show cards */}

    <div className="grid md:grid-cols-2 gap-10 my-4">
        {
            menus.map(item => <MenuItem
            
                key={item._id}
                item={item}
            
            ></MenuItem>)
        }
    </div>
    
    {/* button */}
    <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>

    

        </div>
    );
};

export default PopularMenu;