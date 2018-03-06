import React from 'react';
import './HeaderSection.css';

//The home screens upper section displaying the appname, studentID, etc.
const headerSection = (props) => {

    timetable(){
        var webdriver = require('selenium-webdriver');
        var driver = new webdriver.Builder().forBrowser('chrome').build();
    }

    return (
        <div className="HeaderSection" >
            <h1 className="AppName">QMULweather</h1>
            <h4 className="StudentID">{props.studentID}</h4>
            <button className="ChangeButton" onClick={props.onClick}>Change</button>
        </div>
    );
}

export default headerSection;