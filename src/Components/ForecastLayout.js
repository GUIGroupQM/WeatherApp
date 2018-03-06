import React from 'react';
import clear_sky_day from './res/clear_sky_day.png';
import clear_sky_night from './res/clear_sky_night.png';
import few_clouds_day from './res/few_clouds_day.png';
import few_clouds_night from './res/few_clouds_night.png';
import mist_haze from './res/mist_haze.png';
import rain_day from './res/rain_day.png';
import rain_night from './res/rain_night.png';
import shower_rain from './res/shower_rain.png';
import snow from './res/snow.png';
import thunderstorm from './res/thunderstorm.png';
import clouds from './res/clouds.png';

const weatherIcon  = (description) => {
    switch (description) {
        case 'Clear':
            return <img src={clear_sky_day} alt="clearSkyDay" height="100" width="100" />;
        case 'Clouds':
            if (this.state.main.temp > 0) {
                return <img src={few_clouds_day} alt="fewCloudsDay" height="100" width="100" />;
            }
            else {
                return <img src={clouds} alt="clouds" height="100" width="100" />;
            }
        case 'Scattered':
            return <img src={clouds} alt="scatteredCloudsDay" height="100" width="100" />;
        case 'Broken':
            return <img src={clouds} alt="brokenCloudsDay" height="100" width="100" />;
        case 'Shower':
            return <img src={rain_day} alt="showerRainDay" height="100" width="100" />;
        case 'Rain':
            if (this.state.main.temp > 10) {
                return <img src={rain_day} alt="rainDay" height="100" width="100" />;
            }
            else {
                return <img src={shower_rain} alt="rainDay" height="100" width="100" />;
            }
        case 'Thunderstorm':
            return <img src={thunderstorm} alt="thunderstorm" height="100" width="100" />;
        case 'Snow':
            return <img src={snow} alt="snow" height="100" width="100" />;
        case 'Mist':
            return <img src={mist_haze} alt="mist" height="100" width="100" />;
        case 'Haze':
            return <img src={mist_haze} alt="haze" height="100" width="100" />;
        case 'Drizzle':
            return <img src={rain_day} alt="drizzle" height="100" width="100" />;
        default:
            return <div>{this.state.description}</div>;
    }
}

const ForecastLayout = (props) => {

    const style = {
        table: {
            paddingRight: '348px',
            paddingBottom: '221px',
            border: '1px solid black'
        }
    }

    return (
        <div>
            <table style={style.table}>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    );
}

export default ForecastLayout;