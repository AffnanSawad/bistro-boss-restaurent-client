import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menu1 from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import menu2 from '../../../assets/menu/dessert-bg.jpeg'
import menu3 from '../../../assets/menu/pizza-bg.jpg'
import menu4 from '../../../assets/menu/soup-bg.jpg'
import menu5 from '../../../assets/menu/salad-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    
      // CustomHook theke ana hoise = useMenu
  const [menus] = useMenu();
 
//  desserts
  const dessert = menus.filter(item => item.category === 'dessert')

// pizza
  const pizza = menus.filter(item => item.category === 'pizza')

// soup
  const soup = menus.filter(item => item.category === 'soup')

// salad
  const salad = menus.filter(item => item.category === 'salad')








    return (
        <div>
            {/* helmet */}
            <Helmet>
                <title>Menu</title>
            </Helmet>
            {/* helmet end */}
         
         {/* popular menu */}
        <Cover  image={menu1} title={"Our Menu"} ></Cover>
        <div className="max-w-7xl mx-auto my-10">
        <PopularMenu></PopularMenu>
        </div>



        {/* dessert */}
        <Cover  image={menu2} title={"Desserts"} ></Cover>       
        <MenuCategory items={dessert}></MenuCategory>
       

       {/* pizza */}
        <Cover  image={menu3} title={"Pizza"} ></Cover>
        <MenuCategory items={pizza}></MenuCategory>



       {/* soup */}
        <Cover  image={menu4} title={"Soup"} ></Cover>
        <MenuCategory items={soup}></MenuCategory>

        

         {/* salad */}
        <Cover  image={menu5} title={"salad"} ></Cover>
        <MenuCategory items={salad}></MenuCategory>


        </div>
    );
};

export default Menu;