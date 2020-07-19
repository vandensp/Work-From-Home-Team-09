import React from "react";
import logo from "./logo.png";
import "../App.css";
import {Link} from "react-router-dom";



function Heading(){

    return(
        <div className="head">
            <Link to="/Home" > <img src={logo} alt="ogo" className="logo1"/></Link>
        </div>
    )
}



export default Heading;
