import img1 from "../../../assets/shop/banner2.jpg"
import FoodCard from "../../../Components/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Order = () => {

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
        <div className="mb-5">
           <Cover image={img1} title={"Order Now"} ></Cover> 

           {/* tabs */}
           <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
  <TabList className="font-semibold ml-10">
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
  </TabList>
  <TabPanel>
    
    <div className="grid mx-3   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
    {
    salad.map(item=><FoodCard
    
      key={item._id}
    item={item}
    
    ></FoodCard> )
   }
    </div>


  </TabPanel>


  <TabPanel>
  <div className="grid mx-5 md:grid-cols-3 gap-10">
    {
    pizza.map(item=><FoodCard
    
      key={item._id}
    item={item}
    
    ></FoodCard> )
   }
    </div>
  </TabPanel>


  <TabPanel>
  <div className="grid mx-5 md:grid-cols-3 gap-10">
    {
    soup.map(item=><FoodCard
    
      key={item._id}
    item={item}
    
    ></FoodCard> )
   }
    </div>
  </TabPanel>


  <TabPanel>
  <div className="grid mx-5 md:grid-cols-3 gap-10">
    {
    dessert.map(item=><FoodCard
    
      key={item._id}
    item={item}
    
    ></FoodCard> )
   }
    </div>
  </TabPanel>
</Tabs>




        </div>
    );
};

export default Order;