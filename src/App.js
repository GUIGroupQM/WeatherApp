import React, { Component } from 'react';

import './App.css';

//Main class. Keep all components separate in the components folder.
class App extends Component {

    state = {
        studentID: "StudentID"
    }

    switchID(value) {
        this.setState({ studentID: value })
    }


    render() {
        return (
            //All components go inside this div.
            <div className="App">
                <div className="IphoneLayout" />
                <div className="HeaderSection">
                    <h1 className="HeaderWeather">QMULweather</h1>
                    <h4 className="StudentID">{this.state.studentID}</h4>
                    <button className="ChangeButton" onClick={(e) => { this.switchID("test"); }}>Change</button>
                </div>
            </div>
        );
    }
}

export default App;
