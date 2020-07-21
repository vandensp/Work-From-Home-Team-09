import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import angry from "./angry.PNG";
import sad from "./sad.PNG";
import happy from "./happy.PNG";

import Heading from "./Heading";

export default function Mood() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    let formStyle = {
        position: "relative",
        left: "400px",
        padding: "10px"
    };


    return (
        <div>
            <div>
                <div>
                    <div>
            <Heading/>
                <h1 className="headingStyle">Mood Check-In</h1>
        <FormControl className="form" component="fieldset">
            <FormLabel component="legend">On a scale of 1-10 (1 being not at all, 5 completely) how well do you think your superiors assisted you in reducing your work-related stress?
            </FormLabel>
            <RadioGroup aria-label="q1r" name="question1" value={value} onChange={handleChange}>
                <FormControlLabel style={formStyle} value="absolutely not" control={<Radio />} label="1" />
                <FormControlLabel style={formStyle} value="no" control={<Radio />} label="2" />
                <FormControlLabel style={formStyle} value="no opinion" control={<Radio />} label="3" />
                <FormControlLabel style={formStyle} value="yes" control={<Radio />} label="4" />
                <FormControlLabel style={formStyle} value="absolutely" control={<Radio />} label="5" />

            </RadioGroup>
        </FormControl>
                </div>


                    <div className="form">
                <FormControl    component="fieldset">
                    <FormLabel component="legend">On a scale of 1-10 (1 being not at all, 10 meaning completely) how has work contributed to your stress levels?</FormLabel>
                    <RadioGroup aria-label="q2" name="question2" value={value} onChange={handleChange}>
                        <FormControlLabel style={formStyle} value="heck no" control={<Radio />} label="1" />
                        <FormControlLabel style={formStyle} value="nope" control={<Radio />} label="2" />
                        <FormControlLabel style={formStyle} value="maybe" control={<Radio />} label="3" />
                        <FormControlLabel style={formStyle} value="yeah" control={<Radio />} label="4" />
                        <FormControlLabel style={formStyle} value="heck yes" control={<Radio />} label="5" />

                    </RadioGroup>
                </FormControl>
            </div>

            <FormControl className="form"  component="fieldset">
                <FormLabel component="legend">On a scale of 1-10 (1 being not at all, 10 completely) how has work contributed to your stress levels?</FormLabel>
                <RadioGroup aria-label="q2" name="question2" value={value} onChange={handleChange}>
                    <FormControlLabel style={formStyle} value="heck no1" control={<Radio />} label="1" />
                    <FormControlLabel style={formStyle} value="no1" control={<Radio />} label="2" />
                    <FormControlLabel style={formStyle} value="maybe1" control={<Radio />} label="3" />
                    <FormControlLabel style={formStyle} value="yes1" control={<Radio />} label="4" />
                    <FormControlLabel style={formStyle} value="heck yes1" control={<Radio />} label="5" />

                </RadioGroup>
            </FormControl>
            </div>

            <FormControl className="form"  component="fieldset">
                <FormLabel component="legend"> On a scale of 1-10 (1 being not at all, 10 completely) How has work related stress affect your productivity?</FormLabel>
                <RadioGroup aria-label="q2" name="question2" value={value} onChange={handleChange}>
                    <FormControlLabel style={formStyle} value="heck no2" control={<Radio />} label="1" />
                    <FormControlLabel style={formStyle} value="no2" control={<Radio />} label="2" />
                    <FormControlLabel style={formStyle} value="maybe2" control={<Radio />} label="3" />
                    <FormControlLabel style={formStyle} value="yes2" control={<Radio />} label="4" />
                    <FormControlLabel style={formStyle} value="heck yes2" control={<Radio />} label="5" />

                </RadioGroup>
            </FormControl>

            <div className="form">
                <FormControl component="fieldset">
                    <FormLabel className="moodText2" component="legend">What do you think could assist in reducing your stress levels?</FormLabel>

                </FormControl>
                <textarea className="commentBox" name="comment">Enter text here</textarea>

            </div>

            <div className="form">

                <h2 className="moodText1">How do you feel overall this week?</h2>
                <img  className="moodImg" src={happy} alt="happy"/>
                <img className="moodImg" src={angry} alt="angry"/>
                <img className="moodImg" src={sad} alt="sad"/>

            </div>
            </div>
            <button className="submit">Submit</button>
            </div>



    );
}