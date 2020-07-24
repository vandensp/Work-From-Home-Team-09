import React from "react";
import "../App.css";
import Heading from "./Heading";
import {Link} from "react-router-dom";


const brainPics =[
    {
        img:"https://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/002/2227-1.JPG"
    },
    {
        img: "https://www.mentalfloss.com/bundles/mfsite/images/global/mf_logo_tag.png",
    },
    {
        img:"https://media.glassdoor.com/sqll/731186/sporcle-squarelogo-1559754698321.png",
    },
    {
        img: "https://www.buzzfeed.com/static-assets/quizparty/_next/static/img/social.69a29d068d8ad7e450e06d31d85595f1.jpg",
    }
];


function Brain(){


    function renderBrain() {
        let brainDivs = brainPics.map((brain, id) => {

            let styles = {
                margin: "25px",
                height: "395px",
                width: "395px",
                display: 'inline-block',
                padding: "10px",
                borderRadius: "25px"

            };

            return<div style={styles}>

                <div className="shadow">
                    <a href="https://www.poptropica.com"><img className='brainImg' alt="brain" src={brain.img}/></a>

                </div>
            </div>


        });
        return brainDivs;
    }


    return(
        <div>
            <Heading/>
            <h1 className="headingStyle">Brain Break</h1>
            {renderBrain()}
        </div>

    )
}



export default Brain;