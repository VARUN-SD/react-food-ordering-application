import { useContext, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
const Header=()=>{

    const {loggedInUser}=useContext(UserContext);

    const [Button,setButton]=useState("Login");

    const onlineStatus=useOnlineStatus();
    //Subscribing to the store using a Selector
    const cartItems=useSelector((store)=>store.cart.items);

    return(
        <div className="header bg-gray-100 border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <img className="app-logo w-24 sm:w-30" alt="app-logo" src={LOGO}></img>
                <ul className="nav-items flex flex-wrap justify-center items-center gap-3 sm:gap-6">
                    <li className="px-3 text-sm font-medium text-gray-600">
                        <span>Online Status: </span>
                        <span>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</span>
                    </li>
                    <li className="px-4 "><Link to="/" className="text-gray-700 font-medium hover:text-orange-500">Home</Link></li>
                    <li className="px-3 "><Link to="/about" className="text-gray-700 font-medium hover:text-orange-500">About Us</Link></li>
                    <li className="px-3 "><Link to="/contact" className="text-gray-700 font-medium hover:text-orange-500">Contact Us</Link></li>
                    <li className="mr-2"><Link to="/cart" className="relative inline-block">
                       <FaShoppingCart size={30} className="text-gray-700 hover:text-orange-500"/>
                    {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItems.length}</span>)}</Link></li>
                    <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors cursor-pointer" 
                      onClick={()=>{Button==="Login" ? setButton("Logout"):setButton("Login")}}>{Button}  {loggedInUser}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;