import React from "react";
import "./TopBanner.css";
import IOLogo from "./IO-LOGO.png";


const TopBanner = () =>{
    return (
        <div>
            <img className = "IO-LOGO" 
            src = {IOLogo} 
            alt ="IOC Logo"
            width = "25%"
            />
        </div>
    );
};


export default TopBanner;