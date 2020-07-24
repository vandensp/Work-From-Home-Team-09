import React, {Component} from "react"
import {Link} from "react-router-dom";
import logo from "./logo.png";
import "../App.css";
import Table from "./Table"
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from '@material-ui/icons/ListAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MoodIcon from '@material-ui/icons/Mood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import brain from "./brain.PNG";
import mood from "./mood.PNG";
import {loginUser, logoutUser} from "../components/identityActions";
import netlifyIdentity from "netlify-identity-widget";

//userID class based off of code from https://www.netlify.com/blog/2017/10/30/how-to-add-netlify-identity-service-to-react-projects/
function Dashboard(){
    const user = netlifyIdentity.currentUser();
    if (!user){
        window.location = "/";
    }
    console.log("user.meta_data.full_name: ", user.user_metadata);

    if (!user){
        window.location = "/";
    }
    console.log("user: ", user);
    let styles = {
      display: "block",
        fontSize: "30px",
        position: "relative",
        left: "15px",
        padding: "20px"

    };

    let styles1 = {
        display: "block",
        fontSize: "30px",
        position: "relative",
        left: "6px",
        padding: "15px"

    };

    let textStyle = {
        position: "relative",
        marginLeft: "1430px",
        bottom: "30px"
    };

    let textStyle1 = {
        position: "relative",
        marginLeft: "1430px",
        bottom: "50px"
    };

    let textStyle2 = {
        position: "relative",
        marginLeft: "40px",
        color: "#606060",
        top: "0px"

    };

    let textBox = {
        position: "relative",
        left: "40px",
        top: "50px",
        fontSize: "30px"
    };


    let iconStyle = {
        position: "relative",
        marginLeft: "1650px",
        top:"40px",
        fontSize: "40px"
    };

    let icon = {
       display: "block",
        position: "relative",
        left: "220px",
        bottom: "10px",
        fontSize: "35px"
    };

    let icon1 = {
        display: "block",
        position: "relative",
        left: "300px",
        bottom: "10px",
        fontSize: "35px"
    };

    let dashTop = {
        width:"1735px",
    height: "100px",
    backgroundColor: "gold",
    position: "relative",
    left:"170px",
        top:"50px"
    };

    let textGraph = {
        position: "relative",
        color: "#606060",
        bottom: "1600px",
        left: "290px"
    };

    let moodText = {
        position: "relative",
        color: "#606060",
        left: "145px"

    };

    let text = {
        display: "inline"
    };

    let moodPic = {
        position: "relative",
        bottom:"15px",
        left: "3px",
        width: "415px",
        height:"440px"
    };

    let buttonStyle = {

        position: "relative",
        backgroundColor: "black",
        color: "white",
        left: "1450px",
        bottom: "50px",
        height: "30px",
        width: "100px",
        border: "none",
        margin: "10px 10px",
        fontSize: "18px",
        textAlign: "Center"
    };


    return(
        <div>
        <nav>
            <div className="dashTop" style={dashTop}>
                <AccountCircleIcon style={iconStyle}/>
                <h1 style={textStyle}>{user.user_metadata.full_name}</h1>
                <h2 style={buttonStyle} onClick={logoutUser}>Log Out </h2>

            </div>

            <img className="logo" src={logo} alt="logo"/>
            <li><HomeIcon style={styles}><Link to="/"></Link></HomeIcon>Dashboard</li>
            <li><ListAltIcon style={styles}></ListAltIcon><Link to="/Task">Task Management</Link></li>
            <li><TrendingUpIcon style={styles}></TrendingUpIcon><Link to="/Productivity">Productivity</Link></li>
            <li><MoodIcon style={styles}></MoodIcon><Link to="/Mood">Mood Check-In</Link> </li>
            <li><img src={brain} style={styles1} alt="brain"/> <Link to="/Brain">Brain Break</Link></li>

            <div className="box">
                <h1 style={textBox}>Total Tasks</h1>
                <ListAltIcon style={icon}/>
            </div>
            <div className="box1">
                <h1 style={textBox}>Completed Tasks</h1>
                <CheckCircleIcon style={icon1}/>
            </div>
            <div className="box2"><h1 style={textBox}>Pending Tasks</h1>
                <AssignmentTurnedInIcon style={icon1}/>
            </div>

            <div className="taskGraph"/>
            <div>
            <h1 style={textGraph}>Task Progress</h1>
            </div>
            <div className="line"/>

            <div id="myProgress">
                <div id="myBar"></div>
            </div>

            <div id="myProgress">
                <div id="myBar"></div>
            </div>

            <div id="myProgress">
                <div id="myBar"></div>
            </div>

            <div className="moodGraph">
                <div className="moodLine"></div>
                <h1 style={moodText}> Mood Graph</h1>
                <img src={mood} style={moodPic} alt="mood"/>
            </div>

            <div className="taskList">
                <div>
                <h1 style={textStyle2}>List of Tasks</h1>
                <Table/>
                </div>
            </div>

            <div className="line1"/>

        </nav>

        </div>


    )}



export default Dashboard;