import { FaAd, FaCalendar, FaHome, FaList, FaListAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import {  FaCcAmazonPay, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";
// import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    
    // todo: get isadmin value from database..
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                  
                  {
                    isAdmin ? <>  
                     
                     {/* admin */}
                     <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaListAlt></FaListAlt>
                                    Manage Items</NavLink>
                            </li> */}
                            {/* <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                    
                    </> 

                    :

                    <>
                    
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Add a Review</NavLink>
                    </li> */}
                
                    <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaCcAmazonPay></FaCcAmazonPay>
                                        Real Payment History</NavLink>
                                </li>



                    {/* <li>
                        <NavLink to="/dashboard/bookings">
                            <FaList></FaList>
                            My Bookings</NavLink>
                    </li> */}
                    
                    
                    </>
                  }


                    {/* shared */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaVoicemail></FaVoicemail>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;