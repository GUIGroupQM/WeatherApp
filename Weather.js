import React, { Component } from 'react';

import axios from 'axios';

import LocationInfo from './LocationInfo';

import searchicon from './res/searchicon.png';
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
import sky from './res/sky.jpg';
import sky_clouds from './res/sky_clouds.png';

//This component gets the geocoding of a specific location from a google maps API.
//It then gets the weather information of those coordinates from the openweathermap API.
//Using google maps geocoding API creates a better and more accurate search for a location specified by user.

//Holds path to Googles geocoding API
const urlGeo = location => {
    let apiKey = 'AIzaSyDOC-a6MUoMMWMgr-QZMG60RC1mNmAkUic'
    return 'https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key='+apiKey
}

//Holds path to weather API
const urlWeather = (lat, lon) => {
    let apiKey = 'dbbbc91917f4b2a7e668d34396ae8751'
    return 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&APPID='+apiKey
}

const urlWeatherForecast = (lat, lon) => {
    let apiKey = 'dbbbc91917f4b2a7e668d34396ae8751'
    return 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=metric&APPID=' + apiKey
}

class Weather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            forecast: this.props.forecast,
            location: this.props.location,
            address: [],
            coordinates: [],
            main: [],
            description: [],
            wind: [],
            forecastTemps: [],
            forecastTimes: [],
            forecastDescriptions: []
        }
    }

    fetchData() {

        //This variable is needed to reference the class, if 'this' is used inside the API request it would not work.
        let component = this;

        //API request to google maps API(geocoding) to get weather data
        axios.get(urlGeo(this.state.location))
            .then(function (results) {
                component.setState({
                    address: results.data.results["0"].formatted_address,
                    coordinates: results.data.results["0"].geometry.location
                })

                //API request to get weather data from openweathermap
                //If statement determines whether to get forecast data or current weather data
                if (!component.state.forecast) {
                    axios.get(urlWeather(component.state.coordinates.lat, component.state.coordinates.lng))
                        .then(function (results) {
                            component.setState({
                                main: results.data.main,
                                description: results.data.weather["0"].main,
                                wind: results.data.wind
                            })
                        }) //Error handling
                        .catch(function (error) {
                            console.log(error)
                            component.setState({
                                weatherRequestFailed: true
                            })
                        })
                } else {
                    axios.get(urlWeatherForecast(component.state.coordinates.lat, component.state.coordinates.lng))
                        .then(function (results) {
                            console.log(results.data.list)
                            var data = results.data.list;
                            component.setState({
                                forecastTemps: [data[0].main.temp, data[1].main.temp, data[2].main.temp, data[3].main.temp, data[4].main.temp, data[5].main.temp],
                                forecastTimes: [data[0].dt_txt, data[1].dt_txt, data[2].dt_txt, data[3].dt_txt, data[4].dt_txt, data[5].dt_txt],
                                forecastDescriptions: [data[0].weather[0].main, data[1].weather[0].main, data[2].weather[0].main, data[3].weather[0].main, data[4].weather[0].main, data[5].weather[0].main]
                            })                           
                        }) //Error handling
                        .catch(function (error) {
                            console.log(error)
                            component.setState({
                                weatherRequestFailed: true
                            })
                        })
                }
            }) //Error handling
            .catch(function (error) {
                console.log(error)
                component.setState({
                    geoRequestFailed: true
                })
            })
    }

    //Called when component is rendered to get the weather information of London, which is set as default.
    componentDidMount() {
        this.fetchData();
    }

    //Called when user searches another location to update the weather information and update the component.
    switchLocation(value) {
        this.setState({
            location: value
        })
        this.fetchData();
        this.forceUpdate();
    }

    updateLocation(value) {
        this.setState({
            location: value
        })
    }

    //Function that returns an image element depending on the weather description passed to it.
    weatherIcon(description) {
        switch (description) {
            case 'Clear':
                return <img src={clear_sky_day} alt="clearSkyDay" height="50" width="50" />;
            case 'Clouds':
                if (this.state.main.temp > 0) {
                    return <img src={few_clouds_day} alt="fewCloudsDay" height="50" width="50" />;
                }
                else {
                    return <img src={clouds} alt="clouds" height="50" width="50" />;
                }
            case 'Scattered':
                return <img src={clouds} alt="scatteredCloudsDay" height="50" width="50" />;
            case 'Broken':
                return <img src={clouds} alt="brokenCloudsDay" height="50" width="50" />;
            case 'Shower':
                return <img src={rain_day} alt="showerRainDay" height="50" width="50" />;
            case 'Rain':
                if (this.state.main.temp > 10) {
                    return <img src={rain_day} alt="rainDay" height="50" width="50" />;
                }
                else {
                    return <img src={shower_rain} alt="rainDay" height="50" width="50" />;
                }
            case 'Thunderstorm':
                return <img src={thunderstorm} alt="thunderstorm" height="50" width="50" />;
            case 'Snow':
                return <img src={snow} alt="snow" height="50" width="50" />;
            case 'Mist':
                return <img src={mist_haze} alt="mist" height="50" width="50" />;
            case 'Haze':
                return <img src={mist_haze} alt="haze" height="50" width="50" />;
            case 'Drizzle':
                return <img src={rain_day} alt="drizzle" height="50" width="50" />;
            default:
                return <div>{this.state.description}</div>;
        }
    }

    //Returns a table row with three columns displaying time, temperature, and a picture retrieved from weatherIcon() depending on the weather desciptio.
    //Takes an integer, which will get the time, temp, and weather description information from arrays.
    dayForecast(int) {

        //Block of logic reducing a string with time information to format (xx:xx)
        var str = String(this.state.forecastTimes[int])
        var fields = str.split(" ")
        var time = fields[1]
        fields = String(time).split(":")
        time = fields[0].concat(":" + fields[1])

        //Inline styling
        const style = {
            row: {
                fontSize: '22px',
                fontWeight: 'bold',

            },

            column1: {
                fontSize: '20px',
                textShadow: '1px 1px 0 white',
            },

            column2: {
                paddingLeft: '140px',
                paddingRight: '5px'
            }
        }

        return (
            <tr style={style.row}>
                <td>{time}</td>
                <td style={style.column2}>{this.state.forecastTemps[int]}C</td>
                <td >{this.weatherIcon(this.state.forecastDescriptions[int])}</td>
            </tr>
        );
    }

    render() {

        //Inline styling
        const style = {
            backgroundImage: "url(" + sky + ")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "380px 200px",
            marginTop: '-20px',
            marginRight: '27px',
            paddingBottom: '1px',

            searchButton: {
                margin: 'auto',
                border: '0px',
                paddingTop: '5px',
                paddingBottom: '5px'
            },

            location: {
                margin: 'auto',
                width: '170px',
                fontSize: '24px',
            },

            forecastSection: {
                marginRight: '27px',
                backgroundImage: "url(" + sky_clouds + ")",
                backgroundRepeat: 'no-repeat',
                backgroundSize: '375px 390px',
                paddingBottom: '15px'
            },

            header: {
                margin: 'auto',
                marginRight: '220px',
                color: 'whitesmoke',
                backgroundColor: 'black',
                paddingLeft: '3px'
            }
        }

        //If loop determines whether to return a component allowing user to search for weather in a location, default being london, 
        //or return a component forecasting weather information.
        if (!this.state.forecast) {
            return (
                <div style={style}>
                    <button style={style.searchButton}><img src={searchicon} alt="searchicon" width="20" height="20" onClick={() => { this.switchLocation(this.state.location) }} /></button>
                    <input className="inputLocation" type="text" placeholder={this.state.address} onChange={e => { this.updateLocation(e.target.value) }} style={style.location}></input>
                    <LocationInfo className="Info" temp={this.state.main.temp} icon={this.weatherIcon(this.state.description)} windSpeed={this.state.wind.speed} />
                </div>
            );
        }
        else {
            return (
                <div style={style.forecastSection}>
                    <h2 style={style.header}>Queen Mary</h2>
                    <table style={style.table}>
                        <tbody>
                            {this.dayForecast(0)}
                            {this.dayForecast(1)}
                            {this.dayForecast(2)}
                            {this.dayForecast(3)}
                            {this.dayForecast(4)}
                            {this.dayForecast(5)}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default Weather;