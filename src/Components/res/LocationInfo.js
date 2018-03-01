import React from 'react';

//Reusable component. Displays weather information for a location.
const LocationInfo = (props) => {
    return (
        <div>
            <h2>{props.location}</h2>
            <ul>
                <li><h4>{props.main}</h4></li>
                <li><h4>{props.temp}</h4></li>
                <li><h4>{props.windSpeed}</h4></li>
            </ul>
        </div>
    );
}

export default LocationInfo;