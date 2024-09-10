import React from 'react';
import MenuItem from '../../Home/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({items}) => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            
        {/* mapping to show cards */}

    <div className="grid  md:grid-cols-2   gap-10 my-4">
        {
            items.map(item => <MenuItem
            
                key={item._id}
                item={item}
            
            ></MenuItem>)
        }
    </div>
    
    {/* button */}
    <Link to='/order'>
     
    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

    </Link>



        </div>
    );
};

export default MenuCategory;