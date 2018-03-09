import React from 'react';

import wind_speed from './res/wind_speed.png';

//Reusable component. Displays weather information for a location.
//Weather information being the temperature, icon representing the weather conditions, and wind speed
const LocationInfo = (props) => {

    const style = {

        icon: {
            marginTop: '-85px',
            marginLeft: '275px',
            paddingBottom: '0px'
        },

        elementTemp: {
            fontSize: '32px',
            color: 'white',
            textShadow: '3px 2px gray',
            marginLeft: '180px',
            marginRight: '200px',
            marginTop: '25px',
            paddingBottom: '0px'
        },

        elementWindSpeed: {
            color: 'black',
            textShadow: '1px 1px gray',
            marginLeft: '50px',
            marginTop: '-70px'
        },
    }

    return (
        <div>
            <h4 style={style.elementTemp}>{props.temp}C</h4>
            <h4 style={style.icon}>{props.icon}</h4>
            <h4 style={style.elementWindSpeed}><img src={wind_speed} width="30px" height="30px" />{props.windSpeed}mps  </h4>
        </div>
    );
}

export default LocationInfo;