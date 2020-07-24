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

    let qStyle = {
        position: "relative",
        left: "200px",
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
                            <FormLabel style={qStyle} component="legend">How much has work affected your stress levels in last week?</FormLabel>

                            <RadioGroup aria-label="q1r" name="question1" value={value} onChange={handleChange}>
                                <FormControlLabel style={formStyle} value="absolutely not" control={<Radio />} label="Not at All" />
                                <FormControlLabel style={formStyle} value="no" control={<Radio />} label="A little" />
                                <FormControlLabel style={formStyle} value="no opinion" control={<Radio />} label="Quite a bit" />
                                <FormControlLabel style={formStyle} value="yes" control={<Radio />} label="More than usual" />
                                <FormControlLabel style={formStyle} value="absolutely" control={<Radio />} label="Completely" />

                            </RadioGroup>
                        </FormControl>
                    </div>


                    <div className="form">
                        <FormControl    component="fieldset">
                            <FormLabel style={qStyle} component="legend">How has work-related stress affected your productivity in the last week?</FormLabel>
                            <RadioGroup aria-label="q2" name="question2" value={value} onChange={handleChange}>
                                <FormControlLabel style={formStyle} value="heck no" control={<Radio />} label="Not at all" />
                                <FormControlLabel style={formStyle} value="nope" control={<Radio />} label="A little" />
                                <FormControlLabel style={formStyle} value="maybe" control={<Radio />} label="Quite a bit" />
                                <FormControlLabel style={formStyle} value="yeah" control={<Radio />} label="More than usual" />
                                <FormControlLabel style={formStyle} value="heck yes" control={<Radio />} label="Completely" />

                            </RadioGroup>
                        </FormControl>
                    </div>

                    <FormControl className="form"  component="fieldset">
                        <FormLabel style={qStyle} component="legend">How happy are you with the work you completed this week?</FormLabel>
                        <RadioGroup aria-label="q2" name="question2" value={value} onChange={handleChange}>
                            <FormControlLabel style={formStyle} value="heck no1" control={<Radio />} label="Not at all" />
                            <FormControlLabel style={formStyle} value="no1" control={<Radio />} label="A little" />
                            <FormControlLabel style={formStyle} value="maybe1" control={<Radio />} label="Quite a bit" />
                            <FormControlLabel style={formStyle} value="yes1" control={<Radio />} label="More than usual" />
                            <FormControlLabel style={formStyle} value="heck yes1" control={<Radio />} label="Completely" />

                        </RadioGroup>
                    </FormControl>
                </div>

                <FormControl className="form"  component="fieldset">
                    <FormLabel style={qStyle} component="legend"> Would you say you struggled with staying motivated this week?</FormLabel>
                    <RadioGroup aria-label="q2" name="question2" value={value} onChange={handleChange}>
                        <FormControlLabel style={formStyle} value="heck no2" control={<Radio />} label="Not al all" />
                        <FormControlLabel style={formStyle} value="no2" control={<Radio />} label="A little" />
                        <FormControlLabel style={formStyle} value="maybe2" control={<Radio />} label="Quite a bit" />
                        <FormControlLabel style={formStyle} value="yes2" control={<Radio />} label="More than usual" />
                        <FormControlLabel style={formStyle} value="heck yes2" control={<Radio />} label="Completely" />

                    </RadioGroup>
                </FormControl>

                <div>

                    <FormControl className="form"  component="fieldset">
                        <FormLabel style={qStyle} component="legend"> How often have you experienced the feeling of despair in the last week?</FormLabel>
                        <RadioGroup aria-label="q2" name="question2" value={value} onChange={handleChange}>
                            <FormControlLabel style={formStyle} value="heck no3" control={<Radio />} label="Not al all" />
                            <FormControlLabel style={formStyle} value="no3" control={<Radio />} label="A little" />
                            <FormControlLabel style={formStyle} value="maybe3" control={<Radio />} label="Quite a bit" />
                            <FormControlLabel style={formStyle} value="yes3" control={<Radio />} label="More than usual" />
                            <FormControlLabel style={formStyle} value="heck yes3" control={<Radio />} label="Completely" />

                        </RadioGroup>
                    </FormControl>
                </div>

                <div>
                    <FormControl className="form"  component="fieldset">
                        <FormLabel style={qStyle} component="legend"> How often would say experienced joy?</FormLabel>
                        <RadioGroup aria-label="q2" name="question2" value={value} onChange={handleChange}>
                            <FormControlLabel style={formStyle} value="heck no4" control={<Radio />} label="Not al all" />
                            <FormControlLabel style={formStyle} value="no4" control={<Radio />} label="A little" />
                            <FormControlLabel style={formStyle} value="maybe4" control={<Radio />} label="Quite a bit" />
                            <FormControlLabel style={formStyle} value="yes4" control={<Radio />} label="More than usual" />
                            <FormControlLabel style={formStyle} value="heck yes4" control={<Radio />} label="Completely" />

                        </RadioGroup>
                    </FormControl>
                </div>

                <div>

                    <FormControl className="form"  component="fieldset">
                        <FormLabel style={qStyle} component="legend">What do you look forward to next week?</FormLabel>
                        <RadioGroup aria-label="q2" name="question2" value={value} onChange={handleChange}>
                            <FormControlLabel style={formStyle} value="heck no5" control={<Radio />} label="Not al all" />
                            <FormControlLabel style={formStyle} value="no5" control={<Radio />} label="A little" />
                            <FormControlLabel style={formStyle} value="maybe5" control={<Radio />} label="Quite a bit" />
                            <FormControlLabel style={formStyle} value="yes5" control={<Radio />} label="More than usual" />
                            <FormControlLabel style={formStyle} value="heck yes5" control={<Radio />} label="Completely" />

                        </RadioGroup>
                    </FormControl>


                </div>



                <div className="form">
                    <FormControl component="fieldset">
                        <FormLabel className="moodText2" component="legend">What steps could your superiors take to relieve or decrease your work-related stress?</FormLabel>

                    </FormControl>
                    <textarea className="commentBox3" name="comment">Enter text here</textarea>

                </div>

                <div className="form">
                    <FormControl component="fieldset">
                        <FormLabel className="moodText2" component="legend">What song would you say describes your mood this week?</FormLabel>

                    </FormControl>
                    <textarea className="commentBox" name="comment">Enter text here</textarea>

                </div>

                <div className="form">
                    <FormControl component="fieldset">
                        <FormLabel className="moodText2" component="legend"> What do you look forward to next week? Any further comments?
                        </FormLabel>

                    </FormControl>
                    <textarea className="commentBox1" name="comment">Enter text here</textarea>

                </div>

                <div className="form">
                    <FormControl component="fieldset">
                        <FormLabel className="moodText2" component="legend"> Overall would you say this was successful work week?</FormLabel>

                    </FormControl>
                    <textarea className="commentBox2" name="comment">Enter text here</textarea>

                </div>

                <div className="form">

                    <h2 className="moodText1">What would you say is your overall mood for the week?</h2>
                    <img  className="moodImg" src={happy} alt="happy"/>
                    <img className="moodImg" src={angry} alt="angry"/>
                    <img className="moodImg" src={sad} alt="sad"/>

                </div>
            </div>
            <button className="submit">Submit</button>
        </div>



    );
}