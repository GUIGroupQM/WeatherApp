import React from 'react';

import './HeaderSection.css';

//The home screens upper section displaying the appname and a button allowing the user to go to the schools timetable page.
const headerSection = (props) => {
    return (
        <div className="HeaderSection" >
            <h1 className="AppName">QMULweather</h1>
            <button className="TimetableBtn" onClick={() => window.open("https://timetables.qmul.ac.uk/default.aspx")}>Timetable</button>
        </div>
    );
}

export default headerSection;