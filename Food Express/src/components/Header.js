import { Link } from "react-router";
import { Logo_Url } from "../utils/constants";
import { useState } from "react";

const Header =() =>{

    const[newButton,setButton] = useState("Login");
    
    return(
        <div className="flex justify-between border border-solid border-black">
            <div className="logo-container">
                <img className="w-32" src={Logo_Url}></img>
            </div>
            <div className="flex items-center ">
                <ul className="flex">
                    <li><Link to="/" className="pr-10">Home</Link></li>
                    <li><Link to="/about" className="pr-10">About Us</Link></li>
                    <li><Link to="/contactus" className="pr-10">Contact Us</Link></li>
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