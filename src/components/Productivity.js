import React from "react";
import "../App.css";
import Heading from "./Heading";
import product from "./product.PNG";
import product1 from "./product1.PNG"
import Table1 from "./Table1";
import Table2 from "./Table2";






function Productivity(){

    let styles = {
        margin: "10px",
        display: "inline-block",
        position: "relative",
        left: "150px"

    };

    let styles1 = {
        margin: "10px",
        borderRadius: "25px",
        display: "inline-block",
        position: "relative",
        left: "200px"

    };

    let textStyle2 = {
        position: "relative",
        marginLeft: "40px",
        color: "#606060",
        top: "0px"

    };


    return(
        <div>
        <div>
            <Heading/>
        </div>
            <h1 className="headingStyle">Productivity</h1>
            <div className="shadow">
            <div style={styles}>
            <img className="productImg" src={product} alt="product"/>
            </div>
                <div style={styles1}>
            <img className="productImg1" src={product1} alt="product"/>

            </div>

                <div className="taskList1">
                        <h1 style={textStyle2}>Completed Tasks</h1>
                        <Table1/>
                    </div>
                <div className="taskList2">
                    <h1 style={textStyle2}>Current Tasks</h1>
                    <Table2/>
                </div>

            </div>
        </div>
    )
}



export default Productivity;