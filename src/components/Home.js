import React, { Component } from "react";
import logo from "./logo.png"
import {Link} from "react-router-dom";

//Source of below code from Hays Stanford "https://github.com/HaysS/netlify-identity-tutorial"
//importing Netlify Identity script
//Must be called from React life-cycle function
function initNetlifyIdentity(){
    console.log("initNetlifyIdentity called.")
    const script = document.createElement("script");

    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
    script.async = true;

    document.body.appendChild(script);
}

function openNetlifyModal() {
    const netlifyIdentity = window.netlifyIdentity;

    if(netlifyIdentity){
        netlifyIdentity.open();
    }
    else{
        console.log('netlifyIdentity not defined')
    }
}

class NetlifyIdentity extends Component {
    componentDidMount() {
        initNetlifyIdentity();
    }
    render() {
        return(<div></div>)
    }
}
//end of used code

function Home(){
    initNetlifyIdentity();


    let buttonStyle = {

        position: "relative",
        backgroundColor: "black",
        color: "white",
        right: "650px",
        bottom: "450px",
        height: "60px",
        width: "285px",
        border: "none",
        margin: "10px 10px"

    };

    let buttonStyle1 = {

        position: "relative",
        right: "650px",
        backgroundColor: "gold",
        bottom: "450px",
        color: "black",
        height: "60px",
        width: "285px",
        border: "none",
        margin: "10px 10px"

    };

    let container = {
        height: "100px",
        width: "350px",
        position: "relative",
        top: "100px",
        left: "280px"
    };

    let container1 = {
        height: "100px",
        width: "350px",
        position: "relative",
        top: "200px",
        left: "280px"
    };
    return(
        <div>
            <h1 style={container}>Tagline to Sell Product Goes Here</h1>
            <h3 style={container1}>Description of product. We haven't really ironed out the details, but they will go here. lol</h3>

        <Link to="/Home" > <img src={logo} alt="ogo" className="ogo"/></Link> //TODO add "openNetlifyModal()" function to these buttons
            <Link to="/Dashboard"> <button style={buttonStyle}>Log In</button></Link>
            <Link to="./Dashboard"> <button style={buttonStyle1}>Sign Up</button></Link>
        </div>

    )
}

export default Home;