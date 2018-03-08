import React, { Component } from 'react';

import './App.css';

import HeaderSection from './Components/HeaderSection';
import Weather from './Components/Weather';

//Main class. Keep all components separate in the components folder and import them here.
class App extends Component {
    render() {
        return (
            //All components go inside this div.
            //Header section being the upper section of the app with appname, and a button.
            //Two weather sections one for the user to search for weather information in a location,
            //the other displaying forecast information for mile end, queen mary
            <div className="App">
                <HeaderSection />
                <Weather className="OtherLocation" location="London" forecast={false} />
                <Weather className="MileEndForecast" location="London, Queen Mary" forecast={true} />
            </div>
        );
    }
}

export default App;
