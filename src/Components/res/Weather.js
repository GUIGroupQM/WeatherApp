import React, { Component } from 'react';
import axios from 'axios';
import './Weather.css';
import LocationInfo from './LocationInfo';

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

class Weather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            location: this.props.location,
            address: '',
            coordinates: [],
            main: [],
            weather: [],
            wind: []
        }
    }

    componentDidMount() {

        //This variable is needed to reference the class, if 'this' is used inside the API request it would not work.
        let component = this;

        //API request to google maps API(geocoding) to get weather data
        axios.get(urlGeo(this.state.location))
            .then(function (results) {
                console.log(results.data.results["0"].formatted_address)
                component.setState({
                    address: results.data.results["0"].formatted_address,
                    coordinates: results.data.results["0"].geometry.location
                })
                //API request to openeweathermap to get weather data
                axios.get(urlWeather(component.state.coordinates.lat, component.state.coordinates.lng))
                    .then(function (results) {
                        console.log(results.data)
                        component.setState({
                            main: results.data.main,
                            weather: results.data.weather["1"],
                            wind: results.data.wind
                        })
                    }) //Error handling
                    .catch(function (error) {
                        console.log(error)
                        component.setState({
                            weatherRequestFailed: true
                        })
                    })
            }) //Error handling
            .catch(function (error) {
                console.log(error)
                component.setState({
                    geoRequestFailed: true
                })
            })
    }

    render() {
        return (
            <div>
                <LocationInfo location={this.state.address} temp={this.state.main.temp} main={this.state.weather.description} windSpeed={this.state.wind.speed} />
            </div>
        );
    }
}

export default Weather;