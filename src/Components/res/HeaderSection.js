import React from 'react';
import './HeaderSection.css';

//The home screens upper section displaying the appname, studentID, etc.
const headerSection = (props) => {
    return (
        <div className="HeaderSection" >
            <h1 className="AppName">QMULweather</h1>
            <h4 className="StudentID">{props.studentID}</h4>
            <button className="ChangeButton" onClick={props.onClick}>Change</button>
        </div>
    );
}

export default headerSection;