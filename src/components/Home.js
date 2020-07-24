import React from "react";
import logo from "./logo.png"
import {Link} from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";

function Home(){
    netlifyIdentity.open();

    let buttonStyle1 = {

        position: "relative",
        right: "425px",
        backgroundColor: "gold",
        bottom: "500px",
        color: "black",
        height: "100px",
        width: "285px",
        border: "none",
        margin: "10px 10px",
        fontFamily: "Georgia",
        fontSize: "20px",

    };

    let container = {
        height: "0px",
        width: "350px",
        position: "relative",
        top: "100px",
        left: "280px",
        fontFamily: "Georgia",
        fontSize: "40px",
    };

    let container1 = {
        height: "350px",
        width: "350px",
        position: "relative",
        top: "200px",
        left: "280px",
        fontFamily: "Serif",
        fontSize: "25px",
    };

    return(
        <div>
            <h1 style={container}>More than Your Average Planner</h1>
            <h3 style={container1}>Busy Bee is an app for the everyday working person. It manages daily task, monitors
                mental health and breaches the gap between employers and employees</h3>
        <Link to="/Home" > <img src={logo} alt="ogo" className="ogo"/></Link>
            <Link to="/Dashboard"> <button style={buttonStyle1}>Go to Dashboard</button></Link>
        </div>

    )
}

export default Home;