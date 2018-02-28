import React, { Component } from 'react';
import axios from 'axios'

//Holds path to weather API
const url = city => {
    let apiKey = 'dbbbc91917f4b2a7e668d34396ae8751'
    return 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID='+apiKey
}

//Class is reusable and can be used for any city, user can input desired city to see the weather conditions. Default will be London.
class TodayWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city,
            loading: true,
            data: []
        }
    }

    componentDidMount() {

        //This variable is needed to reference the class, if 'this' is used inside the API call it would not work.
        let component = this;

        //API request to openeweathermap to get weather data
        axios.get(url(this.state.city))
            .then(function (results) {
                console.log(results.data)
                component.setState({
                    loading: false,
                    data: results.data
                })
            })
            .catch(function (error) {
                console.log(error)
                component.setState({
                    requestFailed: true
                })
            })
    }


    render() {

        if (this.state.loading) return <p>Loading...</p>;
        if (this.state.requestFailed) return <p>Failed</p>;

        //TO-DO
        return (
            <div>
                <div>Weather: {this.state.data.main.temp}</div>
            </div>
        );
    }

}

export default TodayWeather;