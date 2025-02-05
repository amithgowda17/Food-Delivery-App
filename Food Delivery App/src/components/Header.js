import { Link } from "react-router";
import { Logo_Url } from "../utils/constants";
import { useState } from "react";

const Header =() =>{

    const[newButton,setButton] = useState("Login");
    
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo_Url}></img>
            </div>
            <div className="navBar">
                <ul>
                    <li><Link to="/" className="home">Home</Link></li>
                    <li><Link to="/about" className="about">About Us</Link></li>
                    <li><Link to="/contactus" className="contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><button className="login-button" onClick={
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