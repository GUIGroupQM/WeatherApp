import React from 'react';

//Reusable component. Displays weather information for a location.
//Weather information being the temperature, icon representing the weather conditions, and wind speed
const LocationInfo = (props) => {

    const style = {

        icon: {
            marginTop: '-70px',
            marginLeft: '50px'
        },

        elementTemp: {
            fontSize: '32px',
            color: 'white',
            textShadow: '3px 1px black',
            marginLeft: '145px',
            marginRight: '200px',
            marginTop: '30px' 
        },

        elementWindSpeed: {
            marginLeft: '300px',
            marginTop: '-50px'
        }
    }

    return (
        <div>
            <h4 style={style.elementTemp}>{props.temp}</h4>
            <h4 style={style.icon}>{props.icon}</h4>
            <h4 style={style.elementWindSpeed}>{props.windSpeed}</h4>
        </div>
    );
}

export default LocationInfo;