import { Link } from "react-router";
import { Logo_Url } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() =>{

    const[newButton,setButton] = useState("Login");

    const onlinsStatus=useOnlineStatus();
    
    return(
        <div className="flex justify-between border border-solid border-black m-1">
            <div className="logo-container">
                <img className="w-32" src={Logo_Url}></img>
            </div>
            <div className="flex items-center ">
                <ul className="flex">
                    <li className="pr-10">Online Status:{onlinsStatus?"✅":"🔴"}</li>
                    <li className="pr-10"><Link to="/" >Home</Link></li>
                    <li className="pr-10"><Link to="/about" >About Us</Link></li>
                    <li className="pr-10"><Link to="/contactus">Contact Us</Link></li>
                    <li className="pr-10"><Link to="/grocery">Grocery</Link></li>
                    <li className="pr-10">Cart</li>
    
                    <li><button className="pr-10" onClick={
                        ()=>{
                            newButton === "Login" ? setButton("Logout"):setButton("Login");
                        }
                    }>{newButton}</button></li>
                </ul>
            </div>
        </div>
    );
};


export default Header;